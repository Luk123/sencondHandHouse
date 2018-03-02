//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package com.wintop.ms.house.entity;
import java.io.Serializable;

public class ServiceResult<T> implements Serializable {
    private static final long serialVersionUID = 3765720967319047788L;
    private T result;
    private Pager pager;
    private boolean success = true;
    private String message = "";
    private String code = "";

    public ServiceResult() {
    }

    public ServiceResult(boolean success, String message) {
        this.success = success;
        this.message = message;
    }

    public ServiceResult(boolean success, T result) {
        this.success = success;
        this.result = result;
    }

    public ServiceResult(boolean success, String message, String code) {
        this.success = success;
        this.message = message;
        this.code = code;
    }

    public boolean getSuccess() {
        return this.success;
    }

    public void setSuccess(boolean isSuccess) {
        this.success = isSuccess;
    }

    public void setResult(T result) {
        this.result = result;
    }

    public void setError(String code, String message) {
        this.code = code;
        this.message = message;
        this.success = false;
    }

    public void setError(String message) {
        this.message = message;
        this.success = false;
    }

    public void setSuccess(String code, String message) {
        this.code = code;
        this.message = message;
        this.success = true;
    }

    public String getCode() {
        return this.code;
    }

    public T getResult() {
        return this.result;
    }

    public String getMessage() {
        return this.message;
    }

    public void setMessage(String value) {
        this.message = value;
    }

    public Pager getPager() {
        return this.pager;
    }

    public void setPager(Pager pager) {
        this.pager = pager;
    }
}
