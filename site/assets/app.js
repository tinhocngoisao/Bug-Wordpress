(function(){
  const state = { jobs: [], filtered: [] };

  function by(a, b){ return a.localeCompare(b, 'vi', { sensitivity: 'base' }); }

  function renderFilters(){
    const locationSet = new Set(state.jobs.map(j => j.location).filter(Boolean));
    const departmentSet = new Set(state.jobs.map(j => j.department).filter(Boolean));

    const locationSelect = document.getElementById('location');
    const departmentSelect = document.getElementById('department');

    for(const loc of Array.from(locationSet).sort(by)){
      const opt = document.createElement('option');
      opt.value = loc; opt.textContent = loc; locationSelect.appendChild(opt);
    }
    for(const dep of Array.from(departmentSet).sort(by)){
      const opt = document.createElement('option');
      opt.value = dep; opt.textContent = dep; departmentSelect.appendChild(opt);
    }
  }

  function renderJobs(list){
    const container = document.getElementById('job-list');
    container.innerHTML = '';
    if(list.length === 0){
      const li = document.createElement('li');
      li.textContent = 'Chưa có tin tuyển dụng phù hợp.';
      container.appendChild(li);
      return;
    }
    for(const job of list){
      const li = document.createElement('li');
      li.className = 'job';
      li.innerHTML = `
        <h4>${job.title}</h4>
        <div class="meta">${job.department || 'Khác'} • ${job.location || 'N/A'}</div>
        <p>${job.summary || ''}</p>
        <a href="${job.applyUrl}" target="_blank" rel="noopener">Ứng tuyển</a>
      `;
      container.appendChild(li);
    }
  }

  function applyFilters(){
    const q = document.getElementById('q').value.trim().toLowerCase();
    const loc = document.getElementById('location').value;
    const dep = document.getElementById('department').value;

    const list = state.jobs.filter(j => {
      const okQ = q ? (j.title.toLowerCase().includes(q) || (j.summary||'').toLowerCase().includes(q)) : true;
      const okLoc = loc ? j.location === loc : true;
      const okDep = dep ? j.department === dep : true;
      return okQ && okLoc && okDep;
    });

    state.filtered = list;
    renderJobs(list);
  }

  function bindEvents(){
    document.getElementById('q').addEventListener('input', applyFilters);
    document.getElementById('location').addEventListener('change', applyFilters);
    document.getElementById('department').addEventListener('change', applyFilters);

    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');
    form.addEventListener('submit', () => {
      status.textContent = 'Cảm ơn bạn! Chúng tôi sẽ liên hệ sớm.';
      form.reset();
    });
  }

  async function loadJobs(){
    try{
      const res = await fetch('./assets/jobs.json', { cache: 'no-store' });
      if(!res.ok) throw new Error('Failed to load jobs');
      const jobs = await res.json();
      state.jobs = Array.isArray(jobs) ? jobs : [];
      renderFilters();
      applyFilters();
    }catch(e){
      console.error(e);
      renderJobs([]);
    }
  }

  function setYear(){
    const y = document.getElementById('year');
    if(y){ y.textContent = new Date().getFullYear(); }
  }

  window.addEventListener('DOMContentLoaded', function(){
    setYear();
    bindEvents();
    loadJobs();
  });
})();
