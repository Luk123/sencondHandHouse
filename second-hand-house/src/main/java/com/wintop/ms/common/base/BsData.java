package com.wintop.ms.common.base;
import lombok.Data;

/**
 * 实体DO基类
 * author mark
 * Date 2018/3/2
 */
@Data
public class BsData{

    protected Integer defultFlag;

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null) return false;
        if (getClass() != obj.getClass()) return false;
        BsData other = (BsData) obj;
        if (defultFlag == null) {
            if (other.defultFlag != null) return false;
        } else if (!defultFlag.equals(other.defultFlag)) return false;
        return true;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((defultFlag == null) ? 0 : defultFlag.hashCode());
        return result;
    }
}
