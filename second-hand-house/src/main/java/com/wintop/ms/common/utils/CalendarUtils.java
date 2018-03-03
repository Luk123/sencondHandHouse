package com.wintop.ms.common.utils;


import java.text.ParseException;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.time.DateUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * author mark
 * Date 2018/3/3
 */
public class CalendarUtils extends DateUtils {
    private static final Logger logger = LoggerFactory.getLogger(CalendarUtils.class);
    private static final int SECOND = 1000;
    private static final int MINUTE = 60000;
    private static final int HOUR = 3600000;
    private static final int DAY = 86400000;

    public static int getBetweenDays(Date beginDate, Date endDate) {
        if ((beginDate == null) || (endDate == null)) {
            throw new IllegalArgumentException("The begingDate and endDate must both be not null");
        }
        long diff = getDayBegin(endDate).getTime() - getDayBegin(beginDate).getTime();
        return (int) (diff / 86400000L);
    }

    public static Date getDayBegin(Date date) {
        if (date == null) {
            return date;
        }
        GregorianCalendar gc = (GregorianCalendar) Calendar.getInstance();
        gc.setTime(date);
        gc.set(11, 0);
        gc.set(12, 0);
        gc.set(13, 0);
        gc.set(14, 0);
        return new Date(gc.getTimeInMillis());
    }

    public static Date getNextDayBegin(Date date) {
        if (date == null) {
            return date;
        }
        return getDayBegin(DateUtils.addDays(date, 1));
    }

    public static boolean isSameDayIgnoringYear(Date date1, Date date2) {
        if ((date1 == null) || (date2 == null)) {
            return false;
        }

        Calendar cal1 = Calendar.getInstance();
        Calendar cal2 = Calendar.getInstance();
        cal1.setTime(date1);
        cal2.setTime(date2);

        return isSameDayIgnoringYear(cal1, cal2);
    }

    public static boolean isSameDayIgnoringYear(Calendar cal1, Calendar cal2) {
        if ((cal1 == null) || (cal2 == null)) {
            return false;
        }

        return (cal1.get(2) == cal2.get(2)) &&
                (cal1
                        .get(5) ==
                        cal2.get(5));
    }

    public static Date parseDate(long milliseconds) {
        return new Date(milliseconds);
    }

    public static Date parseDate(String str) {
        if (StringUtils.isBlank(str)) {
            return null;
        }
        String[] formats = {"yyyy-MM-dd'T'HH:mm:ss.SSSZZ", "yyyy-MM-dd'T'HH:mm:ss.SSS", "yyyy-MM-dd'T'HH:mm:ssZZ", "yyyy-MM-dd'T'HH:mm:ss", "yyyy-MM-ddZZ", "yyyy-MM-dd"};
        Date date = null;
        try {
            date = DateUtils.parseDate(str, formats);
        } catch (ParseException e) {
            logger.error("Cannot parse {} as date.", str);
        }
        return date;
    }
}
