---
title: 'Date Formatter method'
date: '2023-05-13'
description: 'การสร้าง Method สำหรับ Format Date()'
keywords: ['การสร้าง Method สำหรับ Format Date()', 'Format date สำหรับ React nextjs']

--- 

## Format Date()  
Method

```javascript  
# Method format Date

export default function getFormatDate(dateString: string): string {
    return new Intl.DateTimeFormat('th-TH', { dateStyle: 'long'}).format(new Date(dateString))
}

```  