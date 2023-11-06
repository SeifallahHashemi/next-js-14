'use client'
import React from 'react';
import {getDay} from "date-fns-jalali";

const PersianDate = () => {
    return (
        <div>
            {getDay(new Date())}
        </div>
    );
};

export default PersianDate;