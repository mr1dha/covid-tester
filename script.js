let op1 = id('op1');
let op2 = id('op2');
let questionBox = id('questionBox');
let questionCount = id('question-count');
let result = id('result');
let alert = id('alert');
let percent = id('percent');
let recommendation = id('recommendation'); 

let index = 0;
let sum = 0, percents = 0;

let questions = [
		{q:'Apakah kamu mengalami demam lebih dari 37 derajat Celcius Dalam rentang 14 hari terakhir?',options:['Tidak', 'Ya'], answer:1, percentage:100},
		{q:'Apakah kamu mengalami Sesak Napas atau gangguan pernapasan Dalam rentang 14 hari terakhir',options:['Tidak', 'Ya'], answer:1, percentage:100},
		{q:'Apakah kamu mengalami batuk, pilek atau nyeri tenggorokan Dalam rentang 14 hari terakhir',options:['Tidak', 'Ya'], answer:1, percentage:100},
		{q:'Apakah kamu mengalami menggigil Dalam rentang 14 hari terakhir',options:['Tidak', 'Ya'], answer:1, percentage:100},
		{q:'Apakah kamu mengalami Gangguan Pencernaan Dalam rentang 14 hari terakhir',options:['Tidak', 'Ya'], answer:1, percentage:100},
		{q:'Apakah kamu mengalami Mata merah Dalam rentang 14 hari terakhir',options:['Tidak', 'Ya'], answer:1, percentage:100},
		{q:'Apakah Kamu mengalami gejala nyeri otot atau nyeri sendi Dalam rentang 14 hari terakhir',options:['Tidak', 'Ya'], answer:1, percentage:100},
		{q:'Apakah kamu mengalami gejala mual atau muntah Dalam rentang 14 hari terakhir',options:['Tidak', 'Ya'], answer:1, percentage:100},
		{q:'Apakah kamu mengalami Gangguan Indera Pengecp dan Penciuman Dalam rentang 14 hari terakhir',options:['Tidak', 'Ya'], answer:1, percentage:100},
		{q:'Apakah kamu bekerja di / pernah mengunjungi fasilitas publik/kesehatan yang berhubungan dengan pasien positif COVID-19?',options:['Tidak', 'Ya'], answer:1, percentage:100},
		{q:'Pernah berada dalam satu ruangan dengan pasien positif COVID-19?',options:['Tidak', 'Ya'], answer:1, percentage:100},
		{q:'Adakah hubungan / kontak langsung dengan orang yang baru bepergian ke negara / kota terjangkit dalam 14 hari terakhir?',options:['Tidak', 'Ya'], answer:1, percentage:100},
		{q:'Apakah kamu baru saja bepergian ke negara / kota terjangkit dalam 14 hari terakhir?',options:['Tidak', 'Ya'], answer:1, percentage:100},
];

function load(){
	if(index < questions.length){
		questionCount.innerHTML = 'PERTANYAAN '+ (index+1);
		questionBox.innerHTML = questions[index].q;
		op1.innerHTML = questions[index].options[0];
		op2.innerHTML = questions[index].options[1];
	}else{
		questionCount.innerHTML = 'HASIL';
		op1.style.display = 'none';
		op2.style.display = 'none';
		questionBox.style.display = 'none';

		percents = sum / questions.length;
		percent.innerHTML = percents.toFixed(2) + '%'; 

		if(percents > 50){
			alert.className += ' alert-danger';
			recommendation.innerHTML = 'jangan panik! Segera hubungi rumah sakit terdekat yang melayani pasien Covid-19. Pastikan anda mengisolasi diri dan tidak melakukan kontak dengan siapapun.';
		}
		else{
			alert.className += ' alert-success';
			recommendation.innerHTML = 'Jangan lengah! Tetaplah jaga kesehatan dan rajin mencuci tangan dengan sabun dan selalu memakai masker saat berpergian. Jika muncuk gejala Covid-19 silakan hubungi dokter!';
		}

		result.style.display = '';
	}
}

function checkAnswer(e){
	if(e.innerHTML == questions[index].options[questions[index].answer])
		sum += questions[index].percentage;
	index++;
	load();
}

function id(name){
	return document.getElementById(name);
}
window.onload = load();