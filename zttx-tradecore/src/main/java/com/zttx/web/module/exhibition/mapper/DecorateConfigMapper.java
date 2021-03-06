/*
 * Copyright 2015 Zttx, Inc. All rights reserved. 8637.com
 * PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
package com.zttx.web.module.exhibition.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.zttx.sdk.core.GenericMapper;
import com.zttx.sdk.annotation.MyBatisDao;
import com.zttx.web.module.exhibition.entity.DecorateConfig;
import com.zttx.web.module.exhibition.entity.DecorateConfigLog;

/**
 * 展厅自定义模块配置 持久层接口
 * <p>File：DecorateConfigDao.java </p>
 * <p>Title: DecorateConfigDao </p>
 * <p>Description:DecorateConfigDao </p>
 * <p>Copyright: Copyright (c) May 26, 2015</p>
 * <p>Company: 8637.com</p>
 * @author Playguy
 * @version 1.0
 */
@MyBatisDao
public interface DecorateConfigMapper extends GenericMapper<DecorateConfig>
{


    void delByBrandIdAndBrandesId(@Param("brandId")String brandId, @Param("brandsId")String brandsId);
}
