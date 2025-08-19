import { db, storage } from './firebase.js';
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const imgInput = document.getElementById('imgInput');
const preview = document.getElementById('preview');
const optEls = [0,1,2,3].map(i => document.getElementById(`opt${i}`));
const selectBtns = Array.from(document.getElementsByClassName('select-correct'));
const uploadBtn = document.getElementById('uploadBtn');

let correctIndex = 0;
selectBtns.forEach(btn => btn.addEventListener('click', ()=>{
    correctIndex = Number(btn.dataset.index);
    selectBtns.forEach(b=>b.classList.toggle('selected', b===btn));
}));

imgInput.addEventListener('change', () => {
    const file = imgInput.files[0];
    if(file){
        const reader = new FileReader();
        reader.onload = e => { preview.src = e.target.result; preview.style.display='block'; };
        reader.readAsDataURL(file);
    } else { preview.style.display='none'; preview.src=''; }
});

uploadBtn.addEventListener('click', async () => {
    const options = optEls.map(i => i.value.trim());
    if(options.some(v=>!v)){ alert('Fill all options'); return; }

    let imageUrl = "";
    const file = imgInput.files[0];
    if(file){
        const storageRef = ref(storage, `question-images/${Date.now()}-${file.name}`);
        await uploadBytes(storageRef, file);
        imageUrl = await getDownloadURL(storageRef);
    }

    await addDoc(collection(db, 'questions'), {
        options, correct: correctIndex, imageUrl, answeredBy: {}
    });
    alert('Question uploaded!');
    imgInput.value=''; preview.style.display='none'; optEls.forEach(i=>i.value=''); selectBtns.forEach(b=>b.classList.remove('selected'));
});

// Optional: show latest question in real-time
const optionsArea = document.getElementById('optionsArea');
const qImage = document.getElementById('qImage');
const quizView = document.getElementById('quizView');

onSnapshot(collection(db,'questions'), snapshot => {
    const docs = snapshot.docs;
    if(docs.length===0) return;
    const latest = docs[docs.length-1].data();
    quizView.style.display='block';
    if(latest.imageUrl){ qImage.src = latest.imageUrl; qImage.style.display='block'; }
    else qImage.style.display='none';

    optionsArea.innerHTML = '';
    latest.options.forEach((opt,i)=>{
        const btn = document.createElement('button');
        btn.textContent = `${['A','B','C','D'][i]}: ${opt}`;
        btn.className='opt-btn';
        optionsArea.appendChild(btn);
    });
});
