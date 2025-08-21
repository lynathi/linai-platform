function fakeLogin(role){
  localStorage.setItem('neuron_user', JSON.stringify({role, name:'Lynai'}));
  document.getElementById('dashboard').scrollIntoView({behavior:'smooth'});
}
function fakeSignup(){ alert('تسجيل مستخدم جديد (تجريبي). سنربط لاحقاً بـ Google/Nor.'); }
function openSection(key){
  const titles={
    students:'الشؤون الطلابية',
    assistant:'المساعد الإداري',
    activities:'النشاط الطلابي',
    guidance:'التوجيه الطلابي',
    health:'التوجيه الصحي',
    services:'ورش العمل / الاجتماعات / خدمة المستفيد'
  };
  document.getElementById('ws-title').textContent=titles[key]||'القسم';
  document.getElementById('ws-body').innerHTML=`
    <div class="grid">
      <a class="tile" href="#">جداول</a>
      <a class="tile" href="#">رفع ملفات (Word / PDF / Excel)</a>
      <a class="tile" href="#">تقارير شهرية</a>
      <a class="tile" href="#">إحصاءات</a>
      <a class="tile" href="#">نماذج</a>
      <a class="tile" href="#">حلول وإجراءات</a>
    </div>`;
  document.getElementById('workspace').hidden=false;
  document.getElementById('workspace').scrollIntoView({behavior:'smooth'});
}
