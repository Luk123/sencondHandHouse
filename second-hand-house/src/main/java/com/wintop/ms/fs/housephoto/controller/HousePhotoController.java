package com.wintop.ms.fs.housephoto.controller;

import com.wintop.ms.common.base.Pager;
import com.wintop.ms.common.base.ServiceResult;
import com.wintop.ms.fs.housephoto.bo.HouseListQO;
import com.wintop.ms.fs.housephoto.bo.HousePhotoBO;
import com.wintop.ms.fs.housephoto.bo.HousePhotoPageQO;
import com.wintop.ms.fs.housephoto.entity.HousePhoto;
import com.wintop.ms.fs.housephoto.service.HousePhotoManager;
import org.slf4j.LoggerFactory;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.io.File;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

/**
 * 房屋图片Controller。
 */
@RestController
public class HousePhotoController {

    private static final org.slf4j.Logger Logger = LoggerFactory.getLogger(HousePhotoController.class);

    @Resource
    private HousePhotoManager housePhotoManager;

    /**
     * 主页面分页展示图片
     * @param qo
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/housePhoto/page", method = RequestMethod.GET)
    public Map<String, Object> page(HousePhotoPageQO qo) throws Exception{
        qo.setPageSize(4);
        qo.setType("室内图");
        return housePhotoManager.pageByQuery(HousePhotoBO.class,qo,null);
    }

    /**
     * 房屋相关图片分页
     * @param qo
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/housePhoto/page/houseId", method = RequestMethod.GET)
    public Map<String, Object> pageByHouseId(HousePhotoPageQO qo) throws Exception{
        Map<String, Object> map =  housePhotoManager.pageByQuery(HousePhoto.class,qo,null);
        List<HousePhoto> list = (List<HousePhoto>)map.get("rows");
        if(CollectionUtils.isEmpty(list)){
            return map;
        }
        List<String> ll = new ArrayList<>(list.size());
        for (HousePhoto u:list){
            ll.add(u.getPhotoAddr());
        }
        map.put("rows",ll);
        return map;
    }

    /**
     * 房屋相关图片分页,所有信息
     * @param qo
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/housePhoto/pageall/houseId", method = RequestMethod.GET)
    public Map<String, Object> pageAllByHouseId(HousePhotoPageQO qo) throws Exception{
        return  housePhotoManager.pageByQuery(HousePhoto.class,qo,null);
    }

    /**
     * 新增房屋图片
     * @param dto
     * @return
     */
    @PostMapping(value = "housePhoto/insert",produces="application/json; charset=UTF-8")
    public ServiceResult<Integer> insertHousePhoto(HousePhoto dto) throws  Exception{
        dto.setCreateTime(new Date());
        return housePhotoManager.insert(dto);
    }

    /**
     * 根据房屋类型获取图片
     * @param qo
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/housePhoto/list", method = RequestMethod.GET)
    public ServiceResult<List<HousePhoto>> list(HouseListQO qo) throws Exception{
        return housePhotoManager.listByQuery(qo);
    }

    /**
     * 删除房屋图片
     * @param housePhotoId
     * @return
     * @throws Exception
     */
    @PostMapping(value = "/housePhoto/delete",produces="application/json; charset=UTF-8")
    public ServiceResult<Integer> delete(Integer housePhotoId) throws Exception{
        HousePhoto hp = housePhotoManager.selectByPrimaryKey(housePhotoId).getResult();
        try{
            File file = new File(hp.getPhotoAddr());
            file.delete();
        }catch (Exception e){
            ServiceResult<Integer> result=new ServiceResult<>();
            result.setMessage("删除数据失败");
            result.setSuccess(false);
            return result;
        }
        return housePhotoManager.deleteByPrimaryKey(housePhotoId);
    }
}


