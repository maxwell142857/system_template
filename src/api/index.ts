import request from '../utils/request';

export const fetchData = () => {
    return request({
        url: './table.json',
        method: 'get'
    });
};

export const getAdmin = () => {
    return request({
        url: 'http://localhost:9999/api/v1/admin/admin',
        method: 'get'
    });
};

export const addAdmin = () => {
    return request({
        url: 'http://localhost:9999/api/v1/admin/admin',
        method: 'post',
        data:{
            "username": "0000"
        }
    });
};

export const getDataPreview = () => {
    return request({
        url: 'http://localhost:9999/datapreview/datapreview',
        method: 'get'
    });
};
