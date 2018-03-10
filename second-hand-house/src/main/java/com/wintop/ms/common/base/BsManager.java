package com.wintop.ms.common.base;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.wintop.ms.common.utils.DAOUtils;
import com.wintop.ms.common.utils.IObjectCallBack;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * 增删改查操作类，管理Dao、BsData. 统一基本增、删、改、查操作
 *
 * author mark
 * Date 2018/3/3
 */
public class BsManager<M extends BsDao<T>, T extends BsData> {

    @Autowired
    public M mapper;

    /**
     * 新增所有数据
     *
     * author mark
     */
    public ServiceResult<Integer> insert(T t) {
        ServiceResult<Integer> result=new ServiceResult<>();
        try {
            result.setMessage("插入数据成功");
            result.setSuccess(true);
            result.setResult(mapper.insert(t));
        } catch (Exception e) {
            result.setMessage("插入数据失败");
            result.setSuccess(false);
            e.printStackTrace();
        }
        return result;
    }

    /**
     * 新增不为空数据
     *
     * author mark
     */
    public ServiceResult<Integer> insertSelective(T t)  {
        ServiceResult<Integer> result=new ServiceResult<>();
        try {
            result.setMessage("插入数据成功");
            result.setSuccess(true);
            result.setResult(mapper.insertSelective(t));
        } catch (Exception e) {
            result.setMessage("插入数据失败");
            result.setSuccess(false);
            e.printStackTrace();
        }
        return result;
    }

    /**
     * 按主键删除数据
     *
     * author mark
     */
    public <K> ServiceResult<Integer> deleteByPrimaryKey(K id) {
        ServiceResult<Integer> result=new ServiceResult<>();
        try {
            result.setMessage("删除数据成功");
            result.setSuccess(true);
            result.setResult(mapper.deleteByPrimaryKey(id));
        } catch (Exception e) {
            result.setMessage("删除数据失败");
            result.setSuccess(false);
            e.printStackTrace();
        }
        return result;
    }

    /**
     * 更新不为空数据
     *
     * author mark
     */
    public ServiceResult<Integer> updateSelective(T t) {
        ServiceResult<Integer> result=new ServiceResult<>();
        try {
            result.setMessage("更新数据成功");
            result.setSuccess(true);
            result.setResult(mapper.updateByPrimaryKeySelective(t));
        } catch (Exception e) {
            result.setMessage("更新数据失败");
            result.setSuccess(false);
            e.printStackTrace();
        }
        return result;
    }

    /**
     * 更新所有数据
     * <p>
     * author mark
     */
    public ServiceResult<Integer> updateByPrimaryKey(T t)  {
        ServiceResult<Integer> result=new ServiceResult<>();
        try {
            result.setMessage("更新数据成功");
            result.setSuccess(true);
            result.setResult(mapper.updateByPrimaryKey(t));
        } catch (Exception e) {
            result.setMessage("更新数据失败");
            result.setSuccess(false);
            e.printStackTrace();
        }
        return result;
    }

    /**
     * 通过主键查询实体
     *
     * @param <K>
     * author mark
     */
    public <K> ServiceResult<T> selectByPrimaryKey(K id){
        ServiceResult<T> result=new ServiceResult<>();
        try {
            result.setMessage("查询数据成功");
            result.setSuccess(true);
            result.setResult(mapper.selectByPrimaryKey(id));
        } catch (Exception e) {
            result.setMessage("查询数据失败");
            result.setSuccess(false);
            e.printStackTrace();
        }
        return result;
    }

    /**
     * 通过id获取名字,未生成sql，需手写
     *
     * @param id 主键
     * @return String类型name
     * author mark
     * Date 2017年8月18日
     */
    public <K> ServiceResult<String> selectNameById(K id)  {
        ServiceResult<String> result=new ServiceResult<>();
        try {
            result.setMessage("查询数据成功");
            result.setSuccess(true);
            result.setResult(mapper.selectNameById(id));
        } catch (Exception e) {
            result.setMessage("查询数据失败");
            result.setSuccess(false);
            e.printStackTrace();
        }
        return result;
    }

    /**
     * 分页查询,未生成sql，需手写
     *
     * @param qo 查询参数
     * @return list集合
     * author mark
     * Date 2017年8月18日
     */
    public ServiceResult<List<T>>  pageByQuery(BsQO qo) {
        ServiceResult<List<T>> result=new ServiceResult<>();
        try {
            result.setMessage("查询数据成功");
            result.setSuccess(true);
            result.setResult(mapper.pageByQuery(qo));
        } catch (Exception e) {
            result.setMessage("查询数据失败");
            result.setSuccess(false);
            e.printStackTrace();
        }
        return result;
    }

    /**
     * 获取名字列表,未生成sql，需手写
     *
     * @param qo 查询参数
     * @return list集合
     * author mark
     * Date 2017年8月18日
     */
    public ServiceResult<List<T>> listNameByQuery(BsQO qo) {
        ServiceResult<List<T>> result=new ServiceResult<>();
        try {
            result.setMessage("查询数据成功");
            result.setSuccess(true);
            result.setResult(mapper.listNameByQuery(qo));
        } catch (Exception e) {
            result.setMessage("查询数据失败");
            result.setSuccess(false);
            e.printStackTrace();
        }
        return result;
    }

    /**
     * 获取列表,未生成sql，需手写
     *
     * @param qo 查询参数
     * @return list集合
     * author mark
     * Date 2017年8月18日
     */
    public ServiceResult<List<T>> listByQuery(BsQO qo){
        ServiceResult<List<T>> result=new ServiceResult<>();
        try {
            result.setMessage("查询数据成功");
            result.setSuccess(true);
            result.setResult(mapper.listByQuery(qo));
        } catch (Exception e) {
            result.setMessage("查询数据失败");
            result.setSuccess(false);
            e.printStackTrace();
        }
        return result;
    }

    /**
     * 获取主键列表,未生成sql，需手写
     *
     * @param qo 查询参数
     * @return list集合
     * author mark
     * Date 2017年8月18日
     */
    public  ServiceResult<List<Integer>> listIdByQuery(BsQO qo) throws Exception {
        ServiceResult<List<Integer>> result=new ServiceResult<>();
        try {
            result.setMessage("查询数据成功");
            result.setSuccess(true);
            result.setResult(mapper.listIdByQuery(qo));
        } catch (Exception e) {
            result.setMessage("查询数据失败");
            result.setSuccess(false);
            e.printStackTrace();
        }
        return result;
    }

    /**
     * 分页
     *
     * @param qo 查询参数
     * @return list集合
     * author mark
     * Date 2017年8月18日
     */
    public <K> ServiceResult<Pager> pageByQuery(Class<K> clz,PageQO qo,IObjectCallBack<K> cb){
        ServiceResult<Pager>  result = new ServiceResult<Pager>();
        try {
            //引入PageHelper分页插件
            //在查询之前只需要调用。传入页码，以及每页大小
            PageHelper.startPage(qo.getPageIndex(),qo.getPageSize(),true);
            List<T> srclist = mapper.listByQuery(qo);
            List<K> list = DAOUtils.cloneList(clz,srclist,cb);
            //pageInfo包装查询后的结果，只需要将pageINfo交给页面
            //封装了详细的分页信息，包括我们查询出来的数据，传入连续显示的页数
            PageInfo page = new PageInfo(list,qo.getPageSize());
            // 包裝数据
            Pager pager=new Pager(page.getTotal(), list, "查询数据成功", true);
            result.setPager(pager);
            result.setMessage("查询数据成功");
            result.setSuccess(true);
            // result.setResult(pager);
        } catch (Exception e) {
            result.setMessage("查询数据失败");
            result.setSuccess(false);
            e.printStackTrace();
        }
        return result;
    }
}
