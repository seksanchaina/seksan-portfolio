# Project Case Studies - Draft Input Sheet

Use this file to collect only public-safe facts before publishing them on the portfolio. Replace every `[ ... ]` field with a verified value. If a result is confidential, write the percentage or a relative change instead of the absolute value.

## How to complete each project

For each project, fill in:

- **Context:** period, site/process, your role, and intended users.
- **Before:** the original pain point and baseline process or metric.
- **Solution:** what you designed or automated, including tools.
- **Impact:** only measured results, with the measurement period.
- **Evidence:** a public-safe screenshot or diagram caption.
- **Disclosure:** confirm that the content is permitted for a public portfolio.

---

## 01. OEE and Production Performance Dashboard

**Website status:** Facts and results confirmed in Thai - ready for English conversion after period and public-approval confirmation.

| Field | Draft input |
| --- | --- |
| Period | [Month/Year - Month/Year] |
| Production area / process | [Process or line name that is public-safe] |
| Your role | [Your role] |
| Users | Manager and Supervisor |
| Business problem | การบันทึกข้อมูลการผลิตเป็นงาน manual กระจายอยู่ประมาณ 5 ไฟล์ ไฟล์ละ 7-10 ชีท และต้องกรอกตาม template หลายจุด ใช้เวลาประมาณ 2 ชั่วโมง 30 นาทีต่อวัน ไม่มี Daily Report สำหรับติดตามผล ปัญหา และแนวโน้มของวันก่อนหน้า การสรุปผลรายเดือนแบบ manual ใช้เวลา 4-6 ชั่วโมงต่อเดือน |
| Baseline | บันทึกข้อมูลทุก Process: 2 ชั่วโมง 30 นาทีต่อวัน; สรุปรายเดือน: 4-6 ชั่วโมงต่อเดือน; ใช้ประมาณ 5 ไฟล์ ไฟล์ละ 7-10 ชีท |
| Root cause | ข้อมูลกระจายอยู่หลายไฟล์และหลาย template โดยไม่มี Data Table กลางสำหรับรวมข้อมูลของแต่ละ Process |
| Solution delivered | ออกแบบ Excel file เสมือนระบบบันทึกข้อมูลขนาดเล็ก รวมการกรอกข้อมูลไว้ใน 1 ไฟล์ 5 ชีท ผู้ใช้กรอกตามวันที่และกดส่งรายงานผ่าน VBA เพื่อบันทึกข้อมูลแยกตาม Process ลง Data Table กลาง จากนั้นสร้าง Daily Report และ Dashboard สำหรับติดตามผล |
| Technology | Excel, VBA, Power Query, Data Model, Power BI |
| KPI definitions | OEE, Output, Productivity, Defect Rate, Defect Cost, Down Time |
| Measured impact | ลดเวลาบันทึกข้อมูลรายวันจาก 2 ชั่วโมง 30 นาทีเหลือ 30 นาที (ลดลง 2 ชั่วโมงต่อวัน หรือ 80%); ลดจำนวนไฟล์จากประมาณ 5 ไฟล์เหลือ 1 ไฟล์ 5 ชีท; ลดเวลาสรุปผลรายเดือนจาก 4-6 ชั่วโมงเหลือไม่ถึง 1 นาทีด้วยการ Refresh; Manager และ Supervisor ดู Daily Report ได้ทันที |
| Measurement period / source | [Period and source of result] |
| Public-safe evidence | [Screenshot name and what the viewer should notice] |
| Lesson learned | [ ] |
| Approved for public portfolio? | [Yes / No / Need approval] |

**Final one-line impact statement:**

`พัฒนาระบบบันทึกข้อมูลและ Daily Performance Dashboard ที่ลดเวลาบันทึกข้อมูลรายวันลง 80% และลดเวลาสรุปผลรายเดือนจาก 4-6 ชั่วโมงเหลือไม่ถึง 1 นาที`

---

## 02. Electricity Consumption and CO2 Dashboard

**Website status:** Facts and results confirmed in Thai - ready for English conversion after period and public-approval confirmation. Dashboard screenshots are prepared.

| Field | Draft input |
| --- | --- |
| Period | [Month/Year - Month/Year] |
| Scope | [Plant / process / equipment group] |
| Your role | [Your role] |
| Users | Manager and Supervisor |
| Business problem | การบันทึกข้อมูลพลังงานใช้ Excel template และต้องสรุปข้อมูลเมื่อสิ้นเดือน จึงไม่เห็นข้อมูลระหว่างเดือน การสรุปรายเดือนใช้เวลา 4 ชั่วโมง ข้อมูล IoT และ Production Check Sheet แยกกัน ทำให้ต้องเตรียมข้อมูล IoT เพื่อวิเคราะห์ร่วมกับ Check Sheet นาน 2 ชั่วโมง และไม่มี Daily Report สำหรับติดตามผล ปัญหา และแนวโน้มของวันก่อนหน้า |
| Baseline | บันทึกข้อมูลผ่าน Excel template; สรุปรายงานรายเดือน 4 ชั่วโมง; เตรียมข้อมูล IoT เพื่อวิเคราะห์ร่วมกับ Production Check Sheet 2 ชั่วโมง; ไม่สามารถเปรียบเทียบประสิทธิภาพและการใช้พลังงานของเครื่องจักรแต่ละเครื่องได้ชัดเจน |
| Root cause | ข้อมูล IoT และ Production Check Sheet มีโครงสร้างไม่สอดคล้องกันและไม่ได้เชื่อมในระบบเดียวกัน จึงต้องสรุปข้อมูลด้วยมือเป็นรายเดือน |
| Solution delivered | ออกแบบ Production Check Sheet ใหม่ให้เชื่อมโยงกับข้อมูล IoT ได้ สร้าง Excel file สำหรับบันทึกข้อมูลรายวันและใช้ VBA ส่งข้อมูลตาม Process เข้าสู่ Data Table กลาง ดาวน์โหลดข้อมูล IoT แล้วใช้ Power Query จัดเตรียมข้อมูล จากนั้นใช้ Data Model และ Power BI สร้าง Daily Energy Dashboard และสรุปผลด้วยการ Refresh |
| Technology | Excel, VBA, Power Query, Data Model, Power BI, IoT data |
| KPIs | การใช้พลังงานไฟฟ้า, ต้นทุนพลังงานต่อชิ้น, CO2 จากการผลิต, ประสิทธิภาพเครื่องจักร, การใช้พลังงานรายเครื่องจักร, ผลผลิตที่สัมพันธ์กับพลังงาน |
| Measured impact | ลดเวลาเตรียมข้อมูล IoT จาก 2 ชั่วโมงเหลือ 1 นาที (ลดประมาณ 99.2%); ลดเวลาสรุปรายงานรายเดือนจาก 4 ชั่วโมงเหลือ 1 นาที (ลดประมาณ 99.6%); Manager และ Supervisor ดู Daily Report ได้ทันที; เลือกใช้เครื่องจักรที่มีประสิทธิภาพเหมาะสมได้ต่อเนื่อง; ปริมาณการใช้ไฟฟ้าลดลง 5% |
| Measurement period / source | เปรียบเทียบช่วงก่อนและหลังใช้งานระบบ / Dashboard |
| Public-safe evidence | [Overview / Machines / Preheat / Daily detail screenshot captions] |
| Lesson learned | [ ] |
| Approved for public portfolio? | [Yes / No / Need approval] |

**Final one-line impact statement:**

`เชื่อมข้อมูล IoT และ Production Check Sheet เป็น Daily Energy Dashboard ลดเวลาเตรียมข้อมูลและสรุปรายงานลงเหลือ 1 นาที พร้อมสนับสนุนการเลือกใช้เครื่องจักรที่มีประสิทธิภาพจนลดการใช้ไฟฟ้าได้ 5%`

---

## 03. Gas Consumption Dashboard

**Website status:** Existing project - dashboard screenshots are already prepared.

| Field | Draft input |
| --- | --- |
| Period | [Month/Year - Month/Year] |
| Scope | [Process / equipment / plant] |
| Your role | [ ] |
| Business problem | Gas use needed to be reviewed against output, preheat time, and targets. Confirm the actual issue: [ ] |
| Baseline | [How was gas consumption monitored before?] |
| Root cause | [Why actual usage could not be compared consistently with target] |
| Solution delivered | [Dashboard, target comparison, daily monitoring approach] |
| Technology | Power BI, Data Modeling, Excel - confirm or edit: [ ] |
| KPIs | [Gas / 10K pcs, gas cost, preheat time, output, target variance] |
| Measured impact | [Reduction / faster analysis / earlier issue detection / target achievement] |
| Measurement period / source | [ ] |
| Public-safe evidence | [Overview / Daily usage / Analysis / Targets screenshot captions] |
| Lesson learned | [ ] |
| Approved for public portfolio? | [Yes / No / Need approval] |

**Final one-line impact statement:**

`[Made gas performance visible against ______, helping ______.]`

---

## 04. Power Query Reporting Workflow

**Website status:** Existing project - needs verified workflow details and report-time result.

| Field | Draft input |
| --- | --- |
| Period | [Month/Year - Month/Year] |
| Scope | [Report name / teams / number of source files] |
| Your role | [ ] |
| Business problem | Multi-file reporting relied on repetitive copy-and-paste preparation. Confirm the actual issue: [ ] |
| Baseline | [Number of files; report preparation time; error/rework frequency] |
| Root cause | [Why files had different structures or transformations] |
| Solution delivered | [Import, clean, combine, validation, refresh process] |
| Technology | Power Query, Excel, SharePoint - confirm or edit: [ ] |
| Automation flow | [Source -> transformation -> validation -> output] |
| Measured impact | [Example: preparation time from __ hours to __ minutes; error reduction; refresh frequency] |
| Measurement period / source | [ ] |
| Public-safe evidence | [Workflow diagram or anonymized sample] |
| Lesson learned | [ ] |
| Approved for public portfolio? | [Yes / No / Need approval] |

**Final one-line impact statement:**

`[Reduced recurring report preparation from ______ to ______ by standardizing ______.]`

---

## 05. Excel VBA Report Automation

**Website status:** Existing project - needs verified automation scope and result.

| Field | Draft input |
| --- | --- |
| Period | [Month/Year - Month/Year] |
| Scope | [Report / team / number of users] |
| Your role | [ ] |
| Business problem | Recurring spreadsheet calculations and report outputs created avoidable manual work. Confirm the actual issue: [ ] |
| Baseline | [Manual steps; time; frequent calculation/output issue] |
| Root cause | [Why the routine was manual] |
| Solution delivered | [Macros, templates, validation, output generation] |
| Technology | Excel VBA, Power Query, Git - confirm or edit: [ ] |
| Automation flow | [Input -> calculation -> validation -> report output] |
| Measured impact | [Time saved; manual steps removed; error reduction; reports per period] |
| Measurement period / source | [ ] |
| Public-safe evidence | [Anonymized workbook flow or output example] |
| Lesson learned | [ ] |
| Approved for public portfolio? | [Yes / No / Need approval] |

**Final one-line impact statement:**

`[Automated ______ so the team could spend more time on ______.]`

---

## 06. IoT Data Processing Pipeline

**Website status:** Candidate from the original content list - not on the website yet.

| Field | Draft input |
| --- | --- |
| Project exists and is public-safe? | [Yes / No] |
| Period / scope / role | [ ] |
| Business problem | [ ] |
| Data source | [Sensor / machine / system; public-safe description] |
| Solution architecture | [Source -> processing -> storage -> dashboard/action] |
| Technology | [ ] |
| Measured impact | [ ] |
| Evidence / screenshot | [ ] |
| Approved for public portfolio? | [Yes / No / Need approval] |

---

## 07. Asakai Presentation Automation

**Website status:** Candidate from the original content list - not on the website yet.

| Field | Draft input |
| --- | --- |
| Project exists and is public-safe? | [Yes / No] |
| Period / scope / role | [ ] |
| Business problem | [ ] |
| Baseline presentation preparation process | [ ] |
| Solution delivered | [ ] |
| Technology | [ ] |
| Measured impact | [ ] |
| Evidence / screenshot | [ ] |
| Approved for public portfolio? | [Yes / No / Need approval] |

---

## Portfolio publishing checklist

- [ ] Each number is verified and has a measurement period.
- [ ] No customer, supplier, employee, production, cost, or internal target data is exposed without permission.
- [ ] Screenshots are approved or anonymized.
- [ ] Each project has one concise business-impact statement.
- [ ] Each project has a clear explanation of your individual role.
- [ ] Projects marked approved are ready to transfer into `data/portfolio.ts`.
