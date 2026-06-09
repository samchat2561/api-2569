# ขั้นตอนการติดตั้ง TypeScript เพื่อรันโค้ดนี้
1. ติดตั้ง Node.js (หากยังไม่มี)

2. เปิด Terminal ในโฟลเดอร์งานของคุณ แล้วรันคำสั่ง:
# สร้างไฟล์ package.json
npm init -y
# ติดตั้ง Express และ Axios
npm install express axios
# ติดตั้ง TypeScript และ Type definitions
npm install typescript @types/node @types/express ts-node --save-dev

3.**สร้างไฟล์คอนฟิก TypeScript**
npx tsc --init

4. รันคำสั่งใน Terminal
npx ts-node server.ts
