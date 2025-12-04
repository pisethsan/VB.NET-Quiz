const questions = [
{"q":"Who developed Visual Basic?","opts":["Symantec","Ashton-Tate","Microsoft","Sybase"],"a":2},
{"q":"Which of the following statement is used to define a class in visual basic?","opts":["Event class statement","Class statement","Form class statement","Event statement"],"a":1},
{"q":"Which of the following extension is used to represent the project file in Visual Basic?","opts":[".vbp",".vb",".cls",".vvb"],"a":1},
{"q":"If you keep a variable undeclared, it is automatically taken as to which of the following data type in Visual Basic?","opts":["Char","Int","Object","String"],"a":2},
{"q":"Which of the following applications can be developed using Visual Basic tool?","opts":["Graphical User Interface","Real-time","Character User Interface","All of the mentioned"],"a":3},
{"q":"In Visual Basic, which of the following is used for coding single-alternative and dual-alternative selection structures?","opts":["Switch-Case block","If…Then…Else statement","function overloading","Recursion"],"a":1},
{"q":"What will be the output of the following Visual Basic code, If the intnumber variable is 110? If intnumber<=100 Then Intnumber=intnumber*2; Else Intnumber=intnumber*3; EndIf","opts":["180","330","156","270"],"a":1},
{"q":"In the Visual Basic application, which of the following are listed in a properties window?","opts":["Items","Values","Attributes","Objects"],"a":2},
{"q":"What happens when minimize box is set to true?","opts":["Minimize box in title bar disappears","Minimize box is disabled","Minimize box is enabled","Minimize box becomes visible"],"a":2},
{"q":"Which of the following is commonly used to perform an immediate action when clicked in Visual Studio?","opts":["Button control","Close","End","Exit"],"a":0},
{"q":"In the following Visual Basic code, what will be in msg, if str contains “visual basic”? Dim str as String Dim msg as String If str.toUpper = \"VISUAL BASIC\" msg=\"VB.Net\" Else msg=\"Not Visual Basic\" EndIf","opts":["Not Visual Basic","VB.Net","Logical Error","Compiler Error"],"a":1},
{"q":"Which of the following displays the list of projects contained in the Visual Basic current solution?","opts":["List Window","Project Window","Catalogue Window","Solution Explorer Window"],"a":3},
{"q":"Which of the following method is used to sort an array in visual basic?","opts":["Array.Sort()","Array.sortAscending()","Array.arrayArrange()","Array.arrange()"],"a":0},
{"q":"Which of the following is the caption part for the following Visual Basic command? MessageBox.Show(\"Delete Visual Basic?\",\"VB.Net\",MessageBoxButtons.YesNo, MessageBoxIcon.Exclamation, MessageBoxDefaultButton.Button2)","opts":["MessageBoxButtons.YesNo","MessageBoxIcon.Exclamation","\"VB.Net\"","\"Delete Visual Basic?\""],"a":2},
{"q":"Which of the following instruction tells the computer to close the current form in Visual Basic?","opts":["This.Close()","Me.Close()","Close.this()","Close()"],"a":1},
{"q":"Object respond to an event by writing __________","opts":["Defining events","Operations","Defining actions","Event procedures"],"a":3},
{"q":"What output will be returned if the following Visual Basic code is executed? strVisualBasic = \"Sanfoundry, VB.Net\" intCharIndex = strVisualBasic.IndexOf(\"VB\")","opts":["11","12","False","True"],"a":1},
{"q":"What will be the output of the following Visual Basic code? Dim intScores As Integer = {78, 83, 75, 90} Array.Reverse(intScores)","opts":["78,75,83,90","90,75,83,78","78, 83, 75,90","75,78, 83,90"],"a":1},
{"q":"What happens when maximize box is set to true?","opts":["Maximize box in title bar disappears","Maximize box is disabled","Maximize box is enabled","Maximize box becomes visible"],"a":2},
{"q":"What is the value of len in the following Visual Basic code? Dim strVB() As String = {\"Sanfoundry\", \"Visual Basic\", \"VB.Net\", \"Visual Studio\"} Dim len As Integer len = strVB.Length()","opts":["3","5","4","0"],"a":2},
{"q":"Which of the following is the default name assigned to the label control in Visual Basic?","opts":["Label1","DefaultLabel","Label0","NewLabel"],"a":0},
{"q":"Which of the following toolbox is used to include an image on the Visual Basic form?","opts":["Add Image box","Picture Box","Add Picture Box","Image box"],"a":1},
{"q":"In visual basic language what are the rules of a programming language called?","opts":["Grammar","Order","Syntax","Rules"],"a":2},
{"q":"What happens when both the minimize box and maximize box property are set to false in Visual Basic?","opts":["Both are removed from the title bar","Both are disabled","This situation shows an exception","This situation shows an error"],"a":0},
{"q":"In Visual Basic, which of the following keyword tells the computer to pass the variable’s address rather than its contents?","opts":["ByAdd","ByPoint","ByRef","ByVal"],"a":2},
{"q":"Where does the form’s Text Property appear?","opts":["Title bar","In Text box in the form","Caption bar","Text bar"],"a":0},
{"q":"Which of the following is used to display a message box in Visual Basic?","opts":["MessageBox.Show","MessageBox.show","MessageBox","AlertBox.View"],"a":0},
{"q":"In Visual Basic, which of the following method converts a string to a number?","opts":["Convert","Tryparse","Extern","Parse"],"a":1},
{"q":"Which of the following is used to convert a number from one data type to another in visual studio?","opts":["Literal constant","Object","Convert class","Parser"],"a":2},
{"q":"Which statement is used to define a class in visual basic?","opts":["Class statement","Event statement","Event class statement","Form class statement"],"a":0},
{"q":"The position of an item in a list box depends on which of the following property of the value stored in the list box’s?","opts":["Unsorted property","Sorted property","Descending Property","Ascending property"],"a":1},
{"q":"Which of the following returns a value after performing its specific task in Visual Basic?","opts":["Structure","Sub block","Sub procedure","Function Procedure"],"a":3},
{"q":"Which of the following property is used to specify a combo box’s style in Visual Basic?","opts":["Style","ComboBoxStyle","DropDownStyle","DropStyle"],"a":2},
{"q":"What will be the output of the following Visual Basic code? Dim intScores As Integer = {78, 83, 75, 90} Array.Sort(intScores)","opts":["90,83,78,75","78,75,83,90","78, 83, 75,90","75,78, 83,90"],"a":3},
{"q":"The __________ is used to concat to Strings.","opts":["Concatenation operator","+ symbol","Concat function","Cat function"],"a":0},
{"q":"The __________ operator is used to divide two integers.","opts":["Addition","Modulus","Subtraction","Integer division"],"a":3},
{"q":"The __________ operator returns the remainder of the division.","opts":["Addition","Modulus","Subtraction","Integer division"],"a":1},
{"q":"___________ is used to store temporary data by programmers.","opts":["Addressed Location","Variable","Pointer","RAM"],"a":1},
{"q":"___________ determines the type of data stored in a variable.","opts":["Function type","Info Type","Variable type","Data Type"],"a":3},
{"q":"Declaring a variable tell the computer to allocate a memory space that can be accessed by the variable name. The size of the memory space depends on?","opts":["Length of variable name","Data type of the variable","Location of variable in program","Size of memory in computer"],"a":1},
{"q":"A ____________ loop is a loop whose processing is controlled by a counter.","opts":["Counter-controlled","Entry-controlled","Exit-controlled","Accumulator-controlled"],"a":0},
{"q":"____________________ is a counter-controlled loop.","opts":["For..next loop","Do..while loop","While loop","If statement"],"a":0},
{"q":"How many times will the MessageBox.Show method in the following code be processed? For intCount As Integer = 4 To 11 Step 2 MessageBox.Show(\"Hello\") Next intCount","opts":["3","4","5","8"],"a":1},
{"q":"What value is stored in the intCount variable when the loop ends? For intCount As Integer = 4 To 11 Step 2 MessageBox.Show(\"Hello\") Next intCount","opts":["10","11","12","13"],"a":2},
{"q":"How many times will the MessageBox.Show method in the following code be processed? For count As Integer = 5 to 9 Step 5 MessageBox.Show(\"Hi\") Next count","opts":["0","1","2","4"],"a":1},
{"q":"What value is stored in the count variable when the loop ends? For count As Integer = 5 to 9 Step 5 MessageBox.Show(\"Hi\") Next count","opts":["10","9","8","7"],"a":0},
{"q":"____________ is the process of adding a number to the value stored in a value.","opts":["Counting","Updating","Accumulating","Decrementing"],"a":2},
{"q":"_______________ in flowchart is used to represent a for clause.","opts":["Circle","Rectangle","Parallelogram","Hexagon"],"a":3},
{"q":"How many times will the MessageBox.Show method in the following code be processed? For intNum As Integer = 5 To 1 Step -1 MessageBox.Show(\"Hi\") Next intNum","opts":["6","5","4","7"],"a":1},
{"q":"What value is stored in the intNum variable when the loop ends? For intNum As Integer = 5 To 1 Step -1 MessageBox.Show(\"Hi\") Next intNum","opts":["0","1","2","3"],"a":0}
];

function buildQuiz() {
  const form = document.getElementById('quizForm');
  questions.forEach((q, idx) => {
    const card = document.createElement('div');
    card.className = 'p-4 rounded-lg border border-gray-100 fade-in';
    card.id = 'q'+idx;
    const qtitle = document.createElement('div');
    qtitle.className = 'font-semibold text-gray-800';
    qtitle.innerText = (idx+1) + '. ' + q.q;
    card.appendChild(qtitle);

    const optsDiv = document.createElement('div');
    optsDiv.className = 'mt-2 space-y-2';
    q.opts.forEach((opt, j) => {
      const id = `q${idx}_opt${j}`;
      const optWrap = document.createElement('div');
      optWrap.className = 'flex items-center gap-3 p-2 rounded option-wrap border cursor-pointer transitions';
      optWrap.style.borderColor = 'transparent';
      optWrap.addEventListener('click', () => {
        // Clear selection from other options in the same question
        card.querySelectorAll('.option-wrap').forEach(w => w.classList.remove('selected'));
        // Add selection style to the clicked option
        optWrap.classList.add('selected');
        input.checked = true;
      });
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'q'+idx;
      input.id = id;
      input.value = j;
      input.className = 'hidden';
      const label = document.createElement('label');
      label.htmlFor = id;
      label.className = 'option-label text-gray-700';
      label.innerText = `${String.fromCharCode(65 + j)}) ${opt}`;
      optWrap.appendChild(input);
      optWrap.appendChild(label);
      optsDiv.appendChild(optWrap);
    });

    card.appendChild(optsDiv);
    form.appendChild(card);
  });
}

function evaluateQuiz() {
  let correct = 0;
  let total = questions.length;
  const breakdown = [];
  questions.forEach((q, idx) => {
    const selected = document.querySelector('input[name="q'+idx+'"]:checked');
    const card = document.getElementById('q'+idx);
    // remove previous markers
    card.querySelectorAll('.option-wrap').forEach(n => { n.classList.remove('correct','wrong'); n.style.borderColor = 'transparent'; });
    if (selected) {
      const val = parseInt(selected.value,10);
      if (val === q.a) {
        correct += 1;
      }
    }
    // show correct/incorrect styling per option
    const optWraps = card.querySelectorAll('.option-wrap');
    optWraps.forEach((wrap, j) => {
      if (j === q.a) {
        wrap.classList.add('correct');
        wrap.style.borderColor = 'rgba(16,185,129,0.25)';
      }
      const inp = wrap.querySelector('input');
      if (inp.checked && inp.value != q.a) {
        wrap.classList.add('wrong');
        wrap.style.borderColor = 'rgba(239,68,68,0.2)';
      }
    });
    const selectedText = selected ? q.opts[parseInt(selected.value,10)] : null;
    breakdown.push({q: q.q, selected: selectedText, correct: q.opts[q.a]});
  });

  const scoreText = document.getElementById('scoreText');
  const resultCard = document.getElementById('resultCard');
  const breakdownDiv = document.getElementById('breakdown');

  const percent = Math.round((correct/total)*100);
  scoreText.innerHTML = `<span class="badge text-indigo-600">${correct} / ${total}</span> correct — <span class="font-semibold">${percent}%</span>`;
  breakdownDiv.innerHTML = '';
  breakdown.forEach((b, i) => {
    const div = document.createElement('div');
    div.className = 'py-2 border-b border-dashed border-gray-200';
    let sel = b.selected ? `<span class="text-sm">Your answer: <strong>${escapeHtml(b.selected)}</strong></span>` : `<span class="text-sm text-red-600">No answer selected</span>`;
    div.innerHTML = `<div class="text-sm"><strong>Q${i+1}.</strong> ${escapeHtml(b.q)}</div><div class="text-sm mt-1">${sel} — Correct: <strong>${escapeHtml(b.correct)}</strong></div>`;
    breakdownDiv.appendChild(div);
  });

  resultCard.classList.remove('hidden');
  resultCard.scrollIntoView({behavior:'smooth'});
}

function escapeHtml(s) {
  if(!s) return '';
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

document.getElementById('submitBtn').addEventListener('click', (e) => {
  e.preventDefault();
  evaluateQuiz();
});

document.getElementById('resetBtn').addEventListener('click', (e) => {
  e.preventDefault();
  // clear selections and styling
  questions.forEach((q, idx) => {
    const sel = document.querySelectorAll('input[name="q'+idx+'"]');
    sel.forEach(i => i.checked = false);
    const card = document.getElementById('q'+idx);
    if (card) card.querySelectorAll('.option-wrap').forEach(n => { n.classList.remove('correct','wrong', 'selected'); n.style.borderColor = 'transparent'; });
  });
  document.getElementById('resultCard').classList.add('hidden');
  window.scrollTo({top:0, behavior:'smooth'});
});

document.getElementById('showAnswersBtn').addEventListener('click', (e) => {
  e.preventDefault();
  // Hide results if they are visible
  document.getElementById('resultCard').classList.add('hidden');

  questions.forEach((q, idx) => {
    const card = document.getElementById('q'+idx);
    if (card) {
      // Clear any previous styling
      card.querySelectorAll('.option-wrap').forEach(n => { n.classList.remove('correct','wrong', 'selected'); n.style.borderColor = 'transparent'; });
      // Highlight the correct answer
      const correctWrap = card.querySelectorAll('.option-wrap')[q.a];
      correctWrap.classList.add('correct');
    }
  });
  window.scrollTo({top:0, behavior:'smooth'});
});

window.addEventListener('load', buildQuiz);