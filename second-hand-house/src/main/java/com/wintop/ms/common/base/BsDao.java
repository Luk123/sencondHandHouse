package com.wintop.ms.common.base;

import java.util.List;

/**
 * Dao基类，管理BsData，统一基本增、删、改、查操作
 *
 * @param <T> BsData泛型
 * author mark
 * @since 2018/3/2
 */
public interface BsDao<T> {

    /**
     * 通过主键查询实体
     *
     * @param <K>
     * author mark
     */
    <K> T selectByPrimaryKey(K id);

    /**
     * 新增所有数据
     *
     * author mark
     */
    int insert(T t);

    /**
     * 新增不为空数据
     *
     * author mark
     */
    int insertSelective(T t);

    /**
     * 更新不为空数据
     *
     * author mark
     */
    int updateByPrimaryKeySelective(T t);

    /**
     * 更新所有数据
     *
     * author mark
     */
    int updateByPrimaryKey(T t);

    /**
     * 按主键删除数据
     *
     * author mark
     */
    <K> int deleteByPrimaryKey(K id);

    /**
     * 分页查询,未生成sql，需手写
     *
     * @param qo 查询参数
     * @return list集合
     * author mark
     * @since 2017年8月18日
     */
    List<T> pageByQuery(BsQO qo);

    /**
     * 获取名字列表,未生成sql，需手写
     *
     * @param qo 查询参数
     * @return list集合
     * author mark
     * @since 2017年8月18日
     */
    List<T> listNameByQuery(BsQO qo);

    /**
     * 获取列表,未生成sql，需手写
     *
     * @param qo 查询参数
     * @return list集合
     * author mark
     * @since 2017年8月18日
     */
    List<T> listByQuery(BsQO qo);

    /**
     * 获取主键列表,未生成sql，需手写
     *
     * @param qo 查询参数
     * @return list集合
     * author mark
     * @since 2017年8月18日
     */
    List<Integer> listIdByQuery(BsQO qo);

    /**
     * 通过id获取名字,未生成sql，需手写
     *
     * @param id 主键
     * @return String类型name
     * author mark
     * @since 2017年8月18日
     */
    <K> String selectNameById(K id);
}
