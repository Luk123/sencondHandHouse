package com.wintop.ms.upload.controller;

import com.wintop.ms.common.base.ServiceResult;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

/**
 * @author mark
 * @since 2018/3/3
 */
@Controller
public class FileUploadController {
    /** 最大文件大小 */
    private static long                    maxSize = 10 * 1024 * 1024;
    private static Logger logger  = LoggerFactory.getLogger(FileUploadController.class);
    private static final String            IMAGE   = "image";
    /** 定义允许上传的文件扩展名 */
    private static HashMap<String, String> extMap  = new HashMap<String, String>();
    /*
     * 获取file.html页面
     */
    @RequestMapping("file")
    public String file(){
        return "/file";
    }
    /*
     * 获取multifile.html页面
     */
    @RequestMapping("multifile")
    public String multifile(){
        return "/multifile";
    }
    /**
     * 实现多文件上传
     * */
    @RequestMapping(value="multifileUpload",method=RequestMethod.POST)
    /**public @ResponseBody String multifileUpload(@RequestParam("fileName")List<MultipartFile> files) */
    public @ResponseBody ServiceResult<String> multifileUpload(HttpServletRequest request){
        ServiceResult<String> result=new ServiceResult<>();
        List<MultipartFile> files = ((MultipartHttpServletRequest)request).getFiles("fileName");
        if(files.isEmpty() || files.size()==0){
            result.setSuccess(false);
            result.setMessage("文件不能为空");
            return result;
        }
        String path = "C:/picFile" ;
        for(MultipartFile file:files){
            String fileName = file.getOriginalFilename();
            int size = (int) file.getSize();
            System.out.println(fileName + "-->" + size);

            if(!file.isEmpty()&&file.getSize()!=0){
                // 检查上传的图片的大小和扩展名
                if (!checkFileForSpringUpload(file)) {
                    result.setSuccess(false);
                    result.setMessage("上传" + file.getOriginalFilename() + "的图片不符合限制");
                    return result;
//                throw new RuntimeException("上传" + file.getOriginalFilename() + "的图片不符合限制");
                }
                String allPath = path + "/" + fileName;
                System.out.println(fileName + "-->" + allPath);
                File dest = new File(allPath);
                if(!dest.getParentFile().exists()){ //判断文件父目录是否存在
                    dest.getParentFile().mkdir();
                }
                try {
                    file.transferTo(dest);
                }catch (Exception e) {
                    e.printStackTrace();
                    result.setSuccess(true);
                    result.setMessage("服务器出错了");
                }
            }
        }
        return result;
    }

    /**
     * 实现文件上传
     * */
    @RequestMapping("fileUpload")
    @ResponseBody
    public ServiceResult<String> fileUpload(@RequestParam("fileName") MultipartFile file){
        ServiceResult<String> result=new ServiceResult<>();
        if (!file.isEmpty() && file.getSize() != 0) {
            // 检查上传的图片的大小和扩展名
            if (!checkFileForSpringUpload(file)) {
                result.setSuccess(false);
                result.setMessage("上传" + file.getOriginalFilename() + "的图片不符合限制");
                return result;
//                throw new RuntimeException("上传" + file.getOriginalFilename() + "的图片不符合限制");
            }
            String fileName = file.getOriginalFilename();
            int size = (int) file.getSize();
            System.out.println(fileName + "-->" + size);
            String path = "C:/picFile" ;
            String allPath = path + "/" + fileName;
            System.out.println(fileName + "-->" + allPath);
            File dest = new File(allPath);
            if(!dest.getParentFile().exists()){ //判断文件父目录是否存在
                dest.getParentFile().mkdir();
            }
            try {
                file.transferTo(dest); //保存文件
                result.setResult(allPath);
                result.setSuccess(true);
                result.setMessage("文件上传成功");
            } catch (Exception e) {
                e.printStackTrace();
                result.setSuccess(false);
                result.setMessage("服务器出错了");
            }
        } else {
            result.setSuccess(false);
            result.setMessage("文件不能为空");
        }
        return result;
    }
/**
 *@Author:zhangzijuan
 *@date 2018/3/4
 *@param:muFile
 */
    private static boolean checkFileForSpringUpload(MultipartFile muFile) {
        boolean bool = true;
        // 检查文件大小
        if (muFile.getSize() > maxSize) {
            logger.error("=============>上传" + muFile.getOriginalFilename() + "文件大小超过限制");
            bool = false;
        }
        String fileName = muFile.getOriginalFilename();
        // 检查扩展名
        String fileExt = fileName.substring(fileName.lastIndexOf(".") + 1).toLowerCase();
        if (!Arrays.<String> asList(extMap.get(IMAGE).split(",")).contains(fileExt)) {
            logger.error("上传文件" + muFile.getOriginalFilename() + "扩展名是不允许的扩展名。\n只允许"
                    + extMap.get(IMAGE) + "格式。");
            bool = false;
        }
        return bool;
    }

    // 初始化
    static {
        extMap.put(IMAGE, "gif,jpg,jpeg,png,bmp,ico");
    }

}