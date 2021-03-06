/*
 * Copyright 2015 Zttx, Inc. All rights reserved. 8637.com
 * PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
package com.zttx.web.module.common.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.zttx.sdk.annotation.MyBatisDao;
import com.zttx.sdk.bean.Pagination;
import com.zttx.sdk.core.GenericMapper;
import com.zttx.web.module.common.entity.Adjustments;

/**
 * 调价详细信息表 持久层接口
 * <p>File：AdjustmentsDao.java </p>
 * <p>Title: AdjustmentsDao </p>
 * <p>Description:AdjustmentsDao </p>
 * <p>Copyright: Copyright (c) May 26, 2015</p>
 * <p>Company: 8637.com</p>
 * @author Playguy
 * @version 1.0
 */
@MyBatisDao
public interface AdjustmentsMapper extends GenericMapper<Adjustments>
{
    /**
     * 分页查询明细
     * @param filter
     * @param page
     * @return
     */
    List<Map<String, Object>> getBrandAdjustmentsList(@Param("page") Pagination page, @Param("filter") Adjustments filter);
    
    /**
     * 统计
     * @param filter
     * @return
     */
    Map<String, Object> getBrandAdjustmentsListSum(Adjustments filter);
}
