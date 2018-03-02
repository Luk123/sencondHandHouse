package com.wintop.ms.common.base;

import javax.annotation.Resource;
import java.util.List;

/**
 * 增删改查操作类，管理Dao、BsData. 统一基本增、删、改、查操作
 *
 * @author mark
 * @since 2018/3/3
 */
public class BsManager<M extends BsDao<T>, T extends BsData> {

    @Resource
    protected M mapper;

    protected Class<T> type;


    /**
     * 新增所有数据
     *
     * @author mark
     */
    public int insert(T t) throws Exception {
        return mapper.insert(t);
    }

    /**
     * 新增不为空数据
     *
     * @author mark
     */
    public int insertSelective(T t) throws Exception {
        return mapper.insertSelective(t);
    }

    /**
     * 按主键删除数据
     *
     * @author mark
     */
    protected <K> int deleteByPrimaryKey(K id) throws Exception {
        return mapper.deleteByPrimaryKey(id);
    }

    /**
     * 更新不为空数据
     *
     * @author mark
     */
    public int updateSelective(T t) throws Exception {
        return mapper.updateByPrimaryKeySelective(t);
    }

    /**
     * 更新所有数据
     * <p>
     * author mark
     */
    public int updateByPrimaryKey(T t) throws Exception {
        return mapper.updateByPrimaryKey(t);
    }

    /**
     * 通过主键查询实体
     *
     * @param <K>
     * @author mark
     */
    protected <K> T selectByPrimaryKey(K id) throws Exception {
        return mapper.selectByPrimaryKey(id);
    }

    /**
     * 通过id获取名字,未生成sql，需手写
     *
     * @param id 主键
     * @return String类型name
     * @author mark
     * @since 2017年8月18日
     */
    public <K> String selectNameById(K id) throws Exception {
        return mapper.selectNameById(id);
    }

    /**
     * 分页查询,未生成sql，需手写
     *
     * @param qo 查询参数
     * @return list集合
     * @author mark
     * @since 2017年8月18日
     */
    public List<T> pageByQuery(BsQO qo) throws Exception {
        return mapper.pageByQuery(qo);
    }

    /**
     * 获取名字列表,未生成sql，需手写
     *
     * @param qo 查询参数
     * @return list集合
     * @author mark
     * @since 2017年8月18日
     */
    public List<T> listNameByQuery(BsQO qo) throws Exception {
        return mapper.listNameByQuery(qo);
    }

    /**
     * 获取列表,未生成sql，需手写
     *
     * @param qo 查询参数
     * @return list集合
     * @author mark
     * @since 2017年8月18日
     */
    public List<T> listByQuery(BsQO qo) throws Exception {
        return mapper.listByQuery(qo);
    }

    /**
     * 获取主键列表,未生成sql，需手写
     *
     * @param qo 查询参数
     * @return list集合
     * author mark
     * @since 2017年8月18日
     */
    public List<Integer> listIdByQuery(BsQO qo) throws Exception {
        return mapper.listIdByQuery(qo);
    }
}
