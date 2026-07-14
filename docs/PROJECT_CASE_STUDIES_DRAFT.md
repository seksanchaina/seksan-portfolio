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
| Technology | Excel, VBA, Power Query, Data Model, Power BI |
| Data source | IoT data and Production Check Sheet |
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

**Website status:** Facts and results confirmed in Thai - ready for English conversion after period and public-approval confirmation. Dashboard screenshots are prepared.

| Field | Draft input |
| --- | --- |
| Period | [Month/Year - Month/Year] |
| Scope | [Process / equipment / plant] |
| Your role | [Your role] |
| Users | Manager and Supervisor |
| Business problem | การบันทึกข้อมูลใช้ Excel template และสรุปข้อมูลเฉพาะรายเดือน ทำให้ไม่เห็นผลระหว่างเดือน การสรุปรายงานใช้เวลา 2 ชั่วโมง มี 2 กระบวนการที่ใช้พลังงาน Gas ร่วมกันผ่าน Boiler เดียว จึงไม่สามารถระบุได้ว่ากระบวนการใดมีประสิทธิภาพดีหรือควรปรับปรุง ไม่มี Daily Report และมีเพียงเป้าหมายการใช้พลังงานรวมโดยไม่แยกเป้าหมายรายกระบวนการ |
| Baseline | บันทึกข้อมูลผ่าน Excel template; สรุปรายงานรายเดือน 2 ชั่วโมง; ใช้เป้าหมาย Gas รวมของ Boiler โดยไม่มีเป้าหมายหรือการวัดผลรายกระบวนการ |
| Root cause | ข้อมูลการใช้ Gas ผลผลิต และเป้าหมายไม่เชื่อมโยงกันในมุมมองเดียว การใช้ Boiler ร่วมกันทำให้แยกเป้าหมายและวิเคราะห์ประสิทธิภาพของแต่ละกระบวนการได้ไม่ชัดเจน |
| Solution delivered | สร้าง Excel file สำหรับบันทึกข้อมูลรายวันและใช้ VBA ส่งข้อมูลตาม Process เข้าสู่ Data Table กลาง เชื่อมข้อมูลการใช้ Gas ผลผลิต และเป้าหมายผ่าน Power Query และ Data Model สร้าง Daily Report ด้วย Power BI กำหนด Target การใช้ Gas ของแต่ละกระบวนการจากอัตราการใช้พลังงานและลักษณะเครื่องจักร แล้วติดตาม Actual เทียบ Target รายวัน |
| Technology | Excel, VBA, Power Query, Data Model, Power BI |
| KPIs | Gas per unit, ต้นทุน Gas ต่อชิ้น, ผลผลิตรายกระบวนการ, ประสิทธิภาพการใช้ Gas รายกระบวนการ, Actual เทียบ Target รายกระบวนการ, Actual เทียบ Target รวมของ Boiler |
| Measured impact | ลดเวลาสรุปรายงานรายเดือนจาก 2 ชั่วโมงเหลือ 1 นาที (ลดประมาณ 99.2%); Manager และ Supervisor ดู Daily Report ได้ทันที; ระบุปัญหาที่ส่งผลต่อประสิทธิภาพการใช้ Gas ได้รายกระบวนการ; กำหนดและติดตาม Target ของแต่ละกระบวนการได้; เมื่อแต่ละกระบวนการทำ Target ได้ เป้าหมายรวมของ Boiler สามารถบรรลุได้ |
| Measurement period / source | [ ] |
| Public-safe evidence | [Overview / Daily usage / Analysis / Targets screenshot captions] |
| Lesson learned | [ ] |
| Approved for public portfolio? | [Yes / No / Need approval] |

**Final one-line impact statement:**

`เปลี่ยนการติดตามการใช้ Gas ของ Boiler จากเป้าหมายรวมเป็นการควบคุมรายกระบวนการ ลดเวลาสรุปรายงานจาก 2 ชั่วโมงเหลือ 1 นาที และช่วยให้ทีมระบุปัญหาด้านประสิทธิภาพได้ชัดเจนขึ้น`

---

## Shared Data & Automation Foundation

**Website status:** Not a standalone case study. This is the shared data and automation approach used in Projects 01, 02, and 03.

| Field | Draft input |
| --- | --- |
| Purpose | Prepare, clean, standardize, connect, and automate raw production, energy, IoT, and target data before analysis and reporting |
| Used in | Project 01: OEE & Production Performance; Project 02: Electricity Consumption & CO2; Project 03: Gas Consumption |
| Technology | Power Query, Data Model, Excel, VBA, Power BI |
| Shared workflow | Source files / IoT data -> Excel and VBA data entry -> validation and confirmation -> Data Table and Data Model -> Power Query transformation -> Power BI Daily Report |
| VBA automation capabilities | Validate required inputs, check partial data and invalid meter values, confirm before submission, write records to Data Tables by process, clear input after successful submission, and control worksheet protection during data writing |
| Value to the portfolio | Shows that the dashboards are based on repeatable data preparation, data-quality controls, standardized data rules, and report automation rather than manual report assembly |
| Website placement | Present as a "How the solutions work" or "Shared data and automation foundation" callout under the three case studies |

**Thai summary for later approval:**

`Excel, VBA, Power Query, Data Model และ Power BI เป็นโครงสร้างข้อมูลและระบบอัตโนมัติร่วมของทั้ง 3 Dashboard โดย VBA ช่วยตรวจสอบและส่งข้อมูลเข้าสู่ Data Table ก่อนนำไปสรุปเป็นรายงาน ไม่ใช่ Case Study แยก`

### Context for Portfolio (Thai - approval draft)

ออกแบบ Manufacturing Reporting Automation Framework บน Excel เพื่อเปลี่ยนข้อมูลหน้างานให้เป็นข้อมูลพร้อมวิเคราะห์ โดยใช้ VBA ควบคุมการบันทึกและตรวจสอบข้อมูล, จัดเก็บข้อมูลแบบแยกตามกระบวนการ, ใช้ Power Query และ Data Model เพื่อเตรียมข้อมูล และแสดงผลผ่าน Daily/Monthly Report และ Power BI Dashboard

ระบบเริ่มจากการทำให้ข้อมูลหน้างานบันทึกได้ง่ายและเชื่อถือได้มากขึ้น ผู้ใช้งานกรอกข้อมูลตาม Process จากนั้น VBA ช่วยตรวจสอบความครบถ้วน ยืนยันก่อนบันทึก และส่งข้อมูลเข้าสู่ Data Table กลาง ทำให้ Manager และ Supervisor ไม่ต้องรอการสรุปแบบ manual จึงเห็นปัญหาและแนวโน้มที่นำไปใช้ตัดสินใจได้เร็วขึ้น

**สิ่งที่ระบบนี้ทำได้จริง**

- ทำให้การบันทึกข้อมูลจากหลาย Process มีรูปแบบมาตรฐานเดียวกัน
- ตรวจข้อมูลที่จำเป็น ข้อมูลไม่ครบ และค่าผิดปกติก่อนบันทึก
- เก็บ Product, Defect, เวลา และข้อมูลพลังงานเป็นตารางกลางที่พร้อมวิเคราะห์
- แยกข้อมูลและติดตามผลราย Process แทนการมองเฉพาะภาพรวม
- เปลี่ยนข้อมูลหน้างานเป็น Daily และ Monthly Report ที่ใช้ติดตามปัญหาได้ต่อเนื่อง

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
