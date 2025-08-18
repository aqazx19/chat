import moment from "moment";

export const formatTime = (date: Date | string = new Date()) => {
    return moment(date).format('HH:mm:ss');
};

export const formatDate = (date: Date | string = new Date()) => {
    return moment(date).format('YYYY-MM-DD');
};

export const formatDateTime = (date: Date | string = new Date()) => {
    return moment(date).format('YYYY-MM-DD HH:mm:ss');
};