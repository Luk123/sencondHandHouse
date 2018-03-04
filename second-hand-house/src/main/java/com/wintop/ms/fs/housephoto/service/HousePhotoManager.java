package com.wintop.ms.fs.housephoto.service;

import com.wintop.ms.common.base.BsManager;
import com.wintop.ms.fs.housephoto.entity.HousePhoto;
import com.wintop.ms.fs.housephoto.mapper.HousePhotoDAO;
import org.springframework.stereotype.Service;

@Service("housePhotoManager")
public class HousePhotoManager extends BsManager<HousePhotoDAO, HousePhoto> {

}