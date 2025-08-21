// مبدئيًا: منع الإرسال وإظهار رسالة لطيفة
document.getElementById('loginForm')?.addEventListener('submit', (e)=>{
  e.preventDefault();
  alert('تم حفظ الواجهة. تسجيل الدخول الحقيقي سنربطه لاحقًا.');
});

document.getElementById('createAccount')?.addEventListener('click', (e)=>{
  e.preventDefault();
  alert('إنشاء الحساب سيُفعَّل بعد تجهيز قاعدة المستخدمين.');
});
