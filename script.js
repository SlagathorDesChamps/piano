let correct = null;

$(document).ready(function () {
  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`polygon[data-key="${e.keyCode}"]`);
    console.log(key);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    correct = false;
    checkAnswer(key, correct);
  }

  function playSoundFromClick(event) {
    const key = event.target;
    const keyCode = $(key).attr("data-key");
    //console.log(key);
    //console.log(keyCode);
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    correct = false;
    checkAnswer(key, correct);
  }

  window.addEventListener("keydown", playSound);

  const keys = document.querySelectorAll("polygon");
  //console.log(keys[0]);
  keys.forEach((key) => key.addEventListener("click", playSoundFromClick));

  function checkAnswer(key, correct) {
    if (correct) {
      key.classList.add("active-right");
      setTimeout(function () {
        key.classList.remove("active-right");
      }, 1500);
    } else {
      key.classList.add("active-wrong");
      // montrer la bonne réponse
      keyCode_correct = "79";
      const key_right = document.querySelector(
        `polygon[data-key="${keyCode_correct}"]`
      );
      key_right.classList.add("active-right");
      setTimeout(function () {
        key_right.classList.remove("active-right");
      }, 1500);
      setTimeout(function () {
        key.classList.remove("active-wrong");
      }, 1500);
    }
  }

  VF = Vex.Flow;

  const normal = document.querySelector("[class=row-normal]");
  const diese = document.querySelector("[class=row-diese]");
  const bemol = document.querySelector("[class=row-bemol]");
  const tonalites_major = document.querySelector(".row-tonalites.major");
  //const tonalites_minor = document.querySelector(".row-tonalites.minor");
  const vexflows_normal = normal.querySelectorAll("[class^=column-]");
  const vexflows_diese = diese.querySelectorAll("[class^=column-]");
  const vexflows_bemol = bemol.querySelectorAll("[class^=column-]");
  const vexflows_tonalite_major = tonalites_major.querySelectorAll(
    "[class^=column-]"
  );
  //const vexflows_tonalite_minor = tonalites_minor.querySelectorAll("[class^=column-]");
  //console.log(vexflows);
  const notes_normal = [
    // A quarter-note C.
    new VF.StaveNote({
      clef: "treble",
      keys: ["c/4"],
      duration: "q",
    }).addModifier(
      0,
      new VF.Annotation("do")
        .setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM)
        .setFont("Arial", "11")
    ),

    // A quarter-note D.
    new VF.StaveNote({
      clef: "treble",
      keys: ["d/4"],
      duration: "q",
    }).addModifier(
      0,
      new VF.Annotation("ré")
        .setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM)
        .setFont("Arial", "11")
    ),

    // A quarter-note E.
    new VF.StaveNote({
      clef: "treble",
      keys: ["e/4"],
      duration: "q",
    }).addModifier(
      0,
      new VF.Annotation("mi")
        .setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM)
        .setFont("Arial", "11")
    ),

    // A quarter-note F.
    new VF.StaveNote({
      clef: "treble",
      keys: ["f/4"],
      duration: "q",
    }).addModifier(
      0,
      new VF.Annotation("fa")
        .setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM)
        .setFont("Arial", "11")
    ),

    // A quarter-note G.
    new VF.StaveNote({
      clef: "treble",
      keys: ["g/4"],
      duration: "q",
    }).addModifier(
      0,
      new VF.Annotation("sol")
        .setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM)
        .setFont("Arial", "11")
    ),

    // A quarter-note A.
    new VF.StaveNote({
      clef: "treble",
      keys: ["a/4"],
      duration: "q",
    }).addModifier(
      0,
      new VF.Annotation("la")
        .setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM)
        .setFont("Arial", "11")
    ),

    // A quarter-note B.
    new VF.StaveNote({
      clef: "treble",
      keys: ["b/4"],
      duration: "q",
      stem_direction: -1,
    }).addModifier(
      0,
      new VF.Annotation("si")
        .setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM)
        .setFont("Arial", "11")
    ),

    // A quarter-note C.
    /*   new VF.StaveNote({clef: "treble", keys: ["c/5"], duration: "q", stem_direction: -1  }).addModifier(
        0,
        new VF.Annotation('do').setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM).setFont('Arial', '11')
      ), */
  ];

  const notes_diese = [
    // A quarter-note C.
    new VF.StaveNote({ clef: "treble", keys: ["c/4"], duration: "q" })
      .addAccidental(0, new VF.Accidental("#"))
      .addModifier(
        0,
        new VF.Annotation("do\u266F")
          .setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM)
          .setFont("Arial", "11")
      ),

    // A quarter-note D.
    new VF.StaveNote({ clef: "treble", keys: ["d/4"], duration: "q" })
      .addAccidental(0, new VF.Accidental("#"))
      .addModifier(
        0,
        new VF.Annotation("ré\u266F")
          .setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM)
          .setFont("Arial", "11")
      ),

    // A quarter-note E.
    new VF.StaveNote({ clef: "treble", keys: ["e/4"], duration: "q" })
      .addAccidental(0, new VF.Accidental("#"))
      .addModifier(
        0,
        new VF.Annotation("mi\u266F")
          .setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM)
          .setFont("Arial", "11")
      ),

    // A quarter-note F.
    new VF.StaveNote({ clef: "treble", keys: ["f/4"], duration: "q" })
      .addAccidental(0, new VF.Accidental("#"))
      .addModifier(
        0,
        new VF.Annotation("fa\u266F")
          .setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM)
          .setFont("Arial", "11")
      ),

    // A quarter-note G.
    new VF.StaveNote({ clef: "treble", keys: ["g/4"], duration: "q" })
      .addAccidental(0, new VF.Accidental("#"))
      .addModifier(
        0,
        new VF.Annotation("sol\u266F")
          .setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM)
          .setFont("Arial", "11")
      ),

    // A quarter-note A.
    new VF.StaveNote({ clef: "treble", keys: ["a/4"], duration: "q" })
      .addAccidental(0, new VF.Accidental("#"))
      .addModifier(
        0,
        new VF.Annotation("la\u266F")
          .setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM)
          .setFont("Arial", "11")
      ),

    // A quarter-note B.
    new VF.StaveNote({
      clef: "treble",
      keys: ["b/4"],
      duration: "q",
      stem_direction: -1,
    })
      .addAccidental(0, new VF.Accidental("#"))
      .addModifier(
        0,
        new VF.Annotation("si\u266F")
          .setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM)
          .setFont("Arial", "11")
      ),

    // A quarter-note C.
    /*     new VF.StaveNote({clef: "treble", keys: ["c/5"], duration: "q", stem_direction: -1}).addAccidental(0, new VF.Accidental('#')).addModifier(
          0,
          new VF.Annotation('do\u266F').setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM).setFont('Arial', '11')
        ), */
  ];

  const notes_bemol = [
    // A quarter-note C.
    new VF.StaveNote({ clef: "treble", keys: ["c/4"], duration: "q" })
      .addAccidental(0, new VF.Accidental("b"))
      .addModifier(
        0,
        new VF.Annotation("do\u266D")
          .setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM)
          .setFont("Arial", "11")
      ),

    // A quarter-note D.
    new VF.StaveNote({ clef: "treble", keys: ["d/4"], duration: "q" })
      .addAccidental(0, new VF.Accidental("b"))
      .addModifier(
        0,
        new VF.Annotation("ré\u266D")
          .setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM)
          .setFont("Arial", "11")
      ),

    // A quarter-note E.
    new VF.StaveNote({ clef: "treble", keys: ["e/4"], duration: "q" })
      .addAccidental(0, new VF.Accidental("b"))
      .addModifier(
        0,
        new VF.Annotation("mi\u266D")
          .setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM)
          .setFont("Arial", "11")
      ),

    // A quarter-note F.
    new VF.StaveNote({ clef: "treble", keys: ["f/4"], duration: "q" })
      .addAccidental(0, new VF.Accidental("b"))
      .addModifier(
        0,
        new VF.Annotation("fa\u266D")
          .setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM)
          .setFont("Arial", "11")
      ),

    // A quarter-note G.
    new VF.StaveNote({ clef: "treble", keys: ["g/4"], duration: "q" })
      .addAccidental(0, new VF.Accidental("b"))
      .addModifier(
        0,
        new VF.Annotation("sol\u266D")
          .setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM)
          .setFont("Arial", "11")
      ),

    // A quarter-note A.
    new VF.StaveNote({ clef: "treble", keys: ["a/4"], duration: "q" })
      .addAccidental(0, new VF.Accidental("b"))
      .addModifier(
        0,
        new VF.Annotation("la\u266D")
          .setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM)
          .setFont("Arial", "11")
      ),

    // A quarter-note B.
    new VF.StaveNote({
      clef: "treble",
      keys: ["b/4"],
      duration: "q",
      stem_direction: -1,
    })
      .addAccidental(0, new VF.Accidental("b"))
      .addModifier(
        0,
        new VF.Annotation("si\u266D")
          .setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM)
          .setFont("Arial", "11")
      ),

    // A quarter-note C.
    /*   new VF.StaveNote({clef: "treble", keys: ["c/5"], duration: "q", stem_direction: -1}).addAccidental(0, new VF.Accidental('b')).addModifier(
        0,
        new VF.Annotation('do\u266D').setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM).setFont('Arial', '11')
      ), */
  ];

  const majorKeys = [
    "C",
    "F",
    "Bb",
    "Eb",
    "Ab",
    "Db",
    "Gb",
    "Cb",
    "G",
    "D",
    "A",
    "E",
    "B",
    "F#",
    "C#",
  ];

  const annotation_tonalites = [
    "0",
    "1\u266D",
    "2\u266D",
    "3\u266D",
    "4\u266D",
    "5\u266D",
    "6\u266D",
    "7\u266D",
    "1\u266F",
    "2\u266F",
    "3\u266F",
    "4\u266F",
    "5\u266F",
    "6\u266F",
    "7\u266F",
  ];

  /* const minorKeys = [
    'Am',
    'Dm',
    'Gm',
    'Cm',
    'Fm',
    'Bbm',
    'Ebm',
    'Abm',
    'Em',
    'Bm',
    'F#m',
    'C#m',
    'G#m',
    'D#m',
    'A#m',
  ]; */

  //vexflows.forEach(createVexflow);
  vexflows_normal.forEach(createVexflow, notes_normal);
  vexflows_diese.forEach(createVexflow, notes_diese);
  vexflows_bemol.forEach(createVexflow, notes_bemol);
  vexflows_tonalite_major.forEach(createVexflowSignature, majorKeys);
  //vexflows_tonalite_minor.forEach(createVexflowSignature,minorKeys);

  function createVexflow(item, index) {
    //console.log(array);

    // Create an SVG renderer and attach it to the DIV element named "column-".
    var div = item;
    var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

    // Configure the rendering context.
    renderer.resize(100, 270);
    var context = renderer.getContext();
    context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

    // Create a stave of width 400 at position 10, 40 on the canvas
    //var stave = new VF.Stave(10, 40, 400);
    var stave = new VF.Stave(0, 150, 100);
    stave.addClef("treble");

    //stave.setKeySignature('B');

    // Connect it to the rendering context and draw!
    stave.setContext(context).draw();

    var note = [
      // A quarter-note C.
      this[index],
    ];

    //console.log(note);

    // Create a voice in 4/4 and add the notes from above
    var voice = new VF.Voice({ num_beats: 1, beat_value: 4 });
    voice.addTickables(note);

    // Format and justify the notes to 400 pixels.
    var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);

    // Render voice
    voice.draw(context, stave);
  }

  function createVexflowSignature(item, index) {
    // Create an SVG renderer and attach it to the DIV element named "column-".
    var div = item;
    var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
    // Configure the rendering context.
    renderer.resize(120, 270);
    var context = renderer.getContext();
    context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");
    var stave = new VF.Stave(0, 150, 120);
    stave.addClef("treble");
    stave.setText(annotation_tonalites[index], VF.Modifier.Position.BELOW);

    stave.setKeySignature(this[index]);

    // Connect it to the rendering context and draw!
    stave.setContext(context).draw();
  }

  /* 
  // Create an SVG renderer and attach it to the DIV element named "boo".
  var div = document.getElementById("boo")
  var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
  
  // Configure the rendering context.
  renderer.resize(500, 500);
  var context = renderer.getContext();
  context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");
  
  // Create a stave of width 400 at position 10, 40 on the canvas.
  var stave = new VF.Stave(100, 150, 50);
  
  // Add a clef and time signature.
  //stave.addClef("treble").addTimeSignature("4/4");
  
  // Connect it to the rendering context and draw!
  stave.setContext(context).draw();
  
  
  var notes = [
    // A quarter-note C.
    new VF.StaveNote({clef: "treble", keys: ["c/4"], duration: "q" })
  
  ];
  
  // Create a voice in 4/4 and add the notes from above
  var voice = new VF.Voice({num_beats: 1,  beat_value: 4});
  voice.addTickables(notes);
  
  // Format and justify the notes to 400 pixels.
  var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);
  
  // Render voice
  voice.draw(context, stave);
   */

  /*  */

  const process_jeu_1 = [
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-7b.question-tonique.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[0]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-7b.question-mediante.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[0]
        .getElementsByTagName("tr")[2]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-7b.question-dominante.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[0]
        .getElementsByTagName("tr")[3]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-7b.question-sensible.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[0]
        .getElementsByTagName("tr")[4]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-7b.question-tonique.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[15]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-7b.question-mediante.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[15]
        .getElementsByTagName("tr")[2]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-7b.question-dominante.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[15]
        .getElementsByTagName("tr")[3]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-7b.question-sensible.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[15]
        .getElementsByTagName("tr")[4]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },

    {
      question: document.querySelector(
        ".jeu-1 .question-answer-6b.question-tonique.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[1]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-6b.question-mediante.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[1]
        .getElementsByTagName("tr")[2]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-6b.question-dominante.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[1]
        .getElementsByTagName("tr")[3]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-6b.question-sensible.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[1]
        .getElementsByTagName("tr")[4]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-6b.question-tonique.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[16]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-6b.question-mediante.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[16]
        .getElementsByTagName("tr")[2]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-6b.question-dominante.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[16]
        .getElementsByTagName("tr")[3]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-6b.question-sensible.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[16]
        .getElementsByTagName("tr")[4]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },

    {
      question: document.querySelector(
        ".jeu-1 .question-answer-5b.question-tonique.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[2]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-5b.question-mediante.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[2]
        .getElementsByTagName("tr")[2]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-5b.question-dominante.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[2]
        .getElementsByTagName("tr")[3]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-5b.question-sensible.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[2]
        .getElementsByTagName("tr")[4]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-5b.question-tonique.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[17]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-5b.question-mediante.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[17]
        .getElementsByTagName("tr")[2]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-5b.question-dominante.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[17]
        .getElementsByTagName("tr")[3]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-5b.question-sensible.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[17]
        .getElementsByTagName("tr")[4]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },

    {
      question: document.querySelector(
        ".jeu-1 .question-answer-4b.question-tonique.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[3]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-4b.question-mediante.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[3]
        .getElementsByTagName("tr")[2]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-4b.question-dominante.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[3]
        .getElementsByTagName("tr")[3]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-4b.question-sensible.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[3]
        .getElementsByTagName("tr")[4]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-4b.question-tonique.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[18]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-4b.question-mediante.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[18]
        .getElementsByTagName("tr")[2]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-4b.question-dominante.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[18]
        .getElementsByTagName("tr")[3]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-4b.question-sensible.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[18]
        .getElementsByTagName("tr")[4]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },

    {
      question: document.querySelector(
        ".jeu-1 .question-answer-3b.question-tonique.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[4]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-3b.question-mediante.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[4]
        .getElementsByTagName("tr")[2]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-3b.question-dominante.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[4]
        .getElementsByTagName("tr")[3]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-3b.question-sensible.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[4]
        .getElementsByTagName("tr")[4]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-3b.question-tonique.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[19]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-3b.question-mediante.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[19]
        .getElementsByTagName("tr")[2]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-3b.question-dominante.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[19]
        .getElementsByTagName("tr")[3]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-3b.question-sensible.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[19]
        .getElementsByTagName("tr")[4]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },

    {
      question: document.querySelector(
        ".jeu-1 .question-answer-2b.question-tonique.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[5]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-2b.question-mediante.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[5]
        .getElementsByTagName("tr")[2]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-2b.question-dominante.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[5]
        .getElementsByTagName("tr")[3]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-2b.question-sensible.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[5]
        .getElementsByTagName("tr")[4]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-2b.question-tonique.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[20]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-2b.question-mediante.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[20]
        .getElementsByTagName("tr")[2]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-2b.question-dominante.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[20]
        .getElementsByTagName("tr")[3]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-2b.question-sensible.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[20]
        .getElementsByTagName("tr")[4]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },

    {
      question: document.querySelector(
        ".jeu-1 .question-answer-1b.question-tonique.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[6]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-1b.question-mediante.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[6]
        .getElementsByTagName("tr")[2]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-1b.question-dominante.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[6]
        .getElementsByTagName("tr")[3]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-1b.question-sensible.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[6]
        .getElementsByTagName("tr")[4]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-1b.question-tonique.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[21]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-1b.question-mediante.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[21]
        .getElementsByTagName("tr")[2]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-1b.question-dominante.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[21]
        .getElementsByTagName("tr")[3]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-1b.question-sensible.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[21]
        .getElementsByTagName("tr")[4]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },

    {
      question: document.querySelector(
        ".jeu-1 .question-answer-0.question-tonique.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[7]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-0.question-mediante.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[7]
        .getElementsByTagName("tr")[2]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-0.question-dominante.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[7]
        .getElementsByTagName("tr")[3]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-0.question-sensible.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[7]
        .getElementsByTagName("tr")[4]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-0.question-tonique.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[22]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-0.question-mediante.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[22]
        .getElementsByTagName("tr")[2]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-0.question-dominante.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[22]
        .getElementsByTagName("tr")[3]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-0.question-sensible.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[22]
        .getElementsByTagName("tr")[4]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },

    {
      question: document.querySelector(
        ".jeu-1 .question-answer-1d.question-tonique.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[8]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-1d.question-mediante.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[8]
        .getElementsByTagName("tr")[2]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-1d.question-dominante.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[8]
        .getElementsByTagName("tr")[3]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-1d.question-sensible.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[8]
        .getElementsByTagName("tr")[4]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-1d.question-tonique.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[23]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-1d.question-mediante.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[23]
        .getElementsByTagName("tr")[2]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-1d.question-dominante.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[23]
        .getElementsByTagName("tr")[3]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-1d.question-sensible.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[23]
        .getElementsByTagName("tr")[4]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },

    {
      question: document.querySelector(
        ".jeu-1 .question-answer-2d.question-tonique.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[9]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-2d.question-mediante.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[9]
        .getElementsByTagName("tr")[2]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-2d.question-dominante.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[9]
        .getElementsByTagName("tr")[3]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-2d.question-sensible.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[9]
        .getElementsByTagName("tr")[4]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-2d.question-tonique.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[24]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-2d.question-mediante.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[24]
        .getElementsByTagName("tr")[2]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-2d.question-dominante.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[24]
        .getElementsByTagName("tr")[3]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-2d.question-sensible.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[24]
        .getElementsByTagName("tr")[4]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },

    {
      question: document.querySelector(
        ".jeu-1 .question-answer-3d.question-tonique.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[10]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-3d.question-mediante.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[10]
        .getElementsByTagName("tr")[2]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-3d.question-dominante.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[10]
        .getElementsByTagName("tr")[3]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-3d.question-sensible.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[10]
        .getElementsByTagName("tr")[4]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-3d.question-tonique.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[25]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-3d.question-mediante.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[25]
        .getElementsByTagName("tr")[2]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-3d.question-dominante.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[25]
        .getElementsByTagName("tr")[3]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-3d.question-sensible.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[25]
        .getElementsByTagName("tr")[4]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },

    {
      question: document.querySelector(
        ".jeu-1 .question-answer-4d.question-tonique.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[11]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-4d.question-mediante.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[11]
        .getElementsByTagName("tr")[2]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-4d.question-dominante.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[11]
        .getElementsByTagName("tr")[3]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-4d.question-sensible.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[11]
        .getElementsByTagName("tr")[4]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-4d.question-tonique.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[26]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-4d.question-mediante.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[26]
        .getElementsByTagName("tr")[2]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-4d.question-dominante.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[26]
        .getElementsByTagName("tr")[3]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-4d.question-sensible.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[26]
        .getElementsByTagName("tr")[4]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },

    {
      question: document.querySelector(
        ".jeu-1 .question-answer-5d.question-tonique.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[12]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-5d.question-mediante.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[12]
        .getElementsByTagName("tr")[2]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-5d.question-dominante.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[12]
        .getElementsByTagName("tr")[3]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-5d.question-sensible.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[12]
        .getElementsByTagName("tr")[4]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-5d.question-tonique.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[27]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-5d.question-mediante.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[27]
        .getElementsByTagName("tr")[2]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-5d.question-dominante.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[27]
        .getElementsByTagName("tr")[3]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-5d.question-sensible.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[27]
        .getElementsByTagName("tr")[4]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },

    {
      question: document.querySelector(
        ".jeu-1 .question-answer-6d.question-tonique.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[13]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-6d.question-mediante.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[13]
        .getElementsByTagName("tr")[2]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-6d.question-dominante.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[13]
        .getElementsByTagName("tr")[3]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-6d.question-sensible.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[13]
        .getElementsByTagName("tr")[4]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-6d.question-tonique.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[28]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-6d.question-mediante.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[28]
        .getElementsByTagName("tr")[2]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-6d.question-dominante.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[28]
        .getElementsByTagName("tr")[3]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-6d.question-sensible.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[28]
        .getElementsByTagName("tr")[4]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },

    {
      question: document.querySelector(
        ".jeu-1 .question-answer-7d.question-tonique.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[14]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-7d.question-mediante.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[14]
        .getElementsByTagName("tr")[2]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-7d.question-dominante.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[14]
        .getElementsByTagName("tr")[3]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-7d.question-sensible.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[14]
        .getElementsByTagName("tr")[4]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-7d.question-tonique.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[29]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-7d.question-mediante.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[29]
        .getElementsByTagName("tr")[2]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-7d.question-dominante.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[29]
        .getElementsByTagName("tr")[3]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-7d.question-sensible.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[29]
        .getElementsByTagName("tr")[4]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
  ];

  const process_jeu_2 = [
    {
      // 7b
      question: document.querySelector(
        ".jeu-2 .question-answer-7b.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("th")[1].childNodes[0].data,
    },
    {
      // 7b
      question: document.querySelector(
        ".jeu-2 .question-answer-7b.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("th")[1].childNodes[0].data,
    },

    {
      // 6b
      question: document.querySelector(
        ".jeu-2 .question-answer-6b.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("th")[2].childNodes[0].data,
    },
    {
      // 6b
      question: document.querySelector(
        ".jeu-2 .question-answer-6b.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("th")[2].childNodes[0].data,
    },

    {
      // 5b
      question: document.querySelector(
        ".jeu-2 .question-answer-5b.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("th")[3].childNodes[0].data,
    },
    {
      // 5b
      question: document.querySelector(
        ".jeu-2 .question-answer-5b.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("th")[3].childNodes[0].data,
    },

    {
      // 4b
      question: document.querySelector(
        ".jeu-2 .question-answer-4b.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("th")[4].childNodes[0].data,
    },
    {
      // 4b
      question: document.querySelector(
        ".jeu-2 .question-answer-4b.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("th")[4].childNodes[0].data,
    },

    {
      // 3b
      question: document.querySelector(
        ".jeu-2 .question-answer-3b.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("th")[5].childNodes[0].data,
    },
    {
      // 3b
      question: document.querySelector(
        ".jeu-2 .question-answer-3b.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("th")[5].childNodes[0].data,
    },

    {
      // 2b
      question: document.querySelector(
        ".jeu-2 .question-answer-2b.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("th")[6].childNodes[0].data,
    },
    {
      // 2b
      question: document.querySelector(
        ".jeu-2 .question-answer-2b.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("th")[6].childNodes[0].data,
    },

    {
      // 1b
      question: document.querySelector(
        ".jeu-2 .question-answer-1b.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("th")[7].childNodes[0].data,
    },
    {
      // 1b
      question: document.querySelector(
        ".jeu-2 .question-answer-1b.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("th")[7].childNodes[0].data,
    },

    {
      // 0
      question: document.querySelector(
        ".jeu-2 .question-answer-0.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("th")[8].childNodes[0].data,
    },
    {
      // 0
      question: document.querySelector(
        ".jeu-2 .question-answer-0.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("th")[8].childNodes[0].data,
    },

    {
      // 1#
      question: document.querySelector(
        ".jeu-2 .question-answer-1d.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("th")[9].childNodes[0].data,
    },
    {
      // 1#
      question: document.querySelector(
        ".jeu-2 .question-answer-1d.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("th")[9].childNodes[0].data,
    },

    {
      // 2#
      question: document.querySelector(
        ".jeu-2 .question-answer-2d.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("th")[10].childNodes[0].data,
    },
    {
      // 2#
      question: document.querySelector(
        ".jeu-2 .question-answer-2d.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("th")[10].childNodes[0].data,
    },

    {
      // 3#
      question: document.querySelector(
        ".jeu-2 .question-answer-3d.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("th")[11].childNodes[0].data,
    },
    {
      // 3#
      question: document.querySelector(
        ".jeu-2 .question-answer-3d.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("th")[11].childNodes[0].data,
    },

    {
      // 4#
      question: document.querySelector(
        ".jeu-2 .question-answer-4d.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("th")[12].childNodes[0].data,
    },
    {
      // 4#
      question: document.querySelector(
        ".jeu-2 .question-answer-4d.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("th")[12].childNodes[0].data,
    },

    {
      // 5#
      question: document.querySelector(
        ".jeu-2 .question-answer-5d.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("th")[13].childNodes[0].data,
    },
    {
      // 5#
      question: document.querySelector(
        ".jeu-2 .question-answer-5d.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("th")[13].childNodes[0].data,
    },

    {
      // 6#
      question: document.querySelector(
        ".jeu-2 .question-answer-6d.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("th")[14].childNodes[0].data,
    },
    {
      // 6#
      question: document.querySelector(
        ".jeu-2 .question-answer-6d.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("th")[14].childNodes[0].data,
    },

    {
      // 7#
      question: document.querySelector(
        ".jeu-2 .question-answer-7d.question-majeur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("th")[15].childNodes[0].data,
    },
    {
      // 7#
      question: document.querySelector(
        ".jeu-2 .question-answer-7d.question-mineur .question"
      ).innerHTML,
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("th")[15].childNodes[0].data,
    },
  ];

  const process_jeu_3 = [
    {
      // 7b
      question: document.querySelector(".jeu-3 .question-answer-7b .question")
        .innerHTML,
      armature: document.querySelector(".column-7b > svg"),
      validator: [
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[0]
          .getElementsByTagName("tr")[1]
          .getElementsByTagName("td")[0].childNodes[0].data,
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[15]
          .getElementsByTagName("tr")[1]
          .getElementsByTagName("td")[0].childNodes[0].data,
      ],
    },
    {
      // 7b
      question: document.querySelector(
        ".jeu-3 .question-answer-7b.question-majeur .question"
      ).innerHTML,
      armature: document.querySelector(".column-7b > svg"),
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[0]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      // 7b
      question: document.querySelector(
        ".jeu-3 .question-answer-7b.question-mineur .question"
      ).innerHTML,
      armature: document.querySelector(".column-7b > svg"),
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[15]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },

    {
      // 6b
      question: document.querySelector(".jeu-3 .question-answer-6b .question")
        .innerHTML,
      armature: document.querySelector(".column-6b > svg"),
      validator: [
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[1]
          .getElementsByTagName("tr")[1]
          .getElementsByTagName("td")[0].childNodes[0].data,
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[16]
          .getElementsByTagName("tr")[1]
          .getElementsByTagName("td")[0].childNodes[0].data,
      ],
    },
    {
      // 6b
      question: document.querySelector(
        ".jeu-3 .question-answer-6b.question-majeur .question"
      ).innerHTML,
      armature: document.querySelector(".column-6b > svg"),
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[1]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      // 6b
      question: document.querySelector(
        ".jeu-3 .question-answer-6b.question-mineur .question"
      ).innerHTML,
      armature: document.querySelector(".column-6b > svg"),
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[16]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },

    {
      // 5b
      question: document.querySelector(".jeu-3 .question-answer-5b .question")
        .innerHTML,
      armature: document.querySelector(".column-5b > svg"),
      validator: [
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[2]
          .getElementsByTagName("tr")[1]
          .getElementsByTagName("td")[0].childNodes[0].data,
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[17]
          .getElementsByTagName("tr")[1]
          .getElementsByTagName("td")[0].childNodes[0].data,
      ],
    },
    {
      // 5b
      question: document.querySelector(
        ".jeu-3 .question-answer-5b.question-majeur .question"
      ).innerHTML,
      armature: document.querySelector(".column-5b > svg"),
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[2]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      // 5b
      question: document.querySelector(
        ".jeu-3 .question-answer-5b.question-mineur .question"
      ).innerHTML,
      armature: document.querySelector(".column-5b > svg"),
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[17]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },

    {
      // 4b
      question: document.querySelector(".jeu-3 .question-answer-4b .question")
        .innerHTML,
      armature: document.querySelector(".column-4b > svg"),
      validator: [
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[3]
          .getElementsByTagName("tr")[1]
          .getElementsByTagName("td")[0].childNodes[0].data,
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[18]
          .getElementsByTagName("tr")[1]
          .getElementsByTagName("td")[0].childNodes[0].data,
      ],
    },
    {
      // 4b
      question: document.querySelector(
        ".jeu-3 .question-answer-4b.question-majeur .question"
      ).innerHTML,
      armature: document.querySelector(".column-4b > svg"),
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[3]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      // 4b
      question: document.querySelector(
        ".jeu-3 .question-answer-4b.question-mineur .question"
      ).innerHTML,
      armature: document.querySelector(".column-4b > svg"),
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[18]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },

    {
      // 3b
      question: document.querySelector(".jeu-3 .question-answer-3b .question")
        .innerHTML,
      armature: document.querySelector(".column-3b > svg"),
      validator: [
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[4]
          .getElementsByTagName("tr")[1]
          .getElementsByTagName("td")[0].childNodes[0].data,
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[19]
          .getElementsByTagName("tr")[1]
          .getElementsByTagName("td")[0].childNodes[0].data,
      ],
    },
    {
      // 3b
      question: document.querySelector(
        ".jeu-3 .question-answer-3b.question-majeur .question"
      ).innerHTML,
      armature: document.querySelector(".column-3b > svg"),
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[4]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      // 3b
      question: document.querySelector(
        ".jeu-3 .question-answer-3b.question-mineur .question"
      ).innerHTML,
      armature: document.querySelector(".column-3b > svg"),
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[19]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },

    {
      // 2b
      question: document.querySelector(".jeu-3 .question-answer-2b .question")
        .innerHTML,
      armature: document.querySelector(".column-2b > svg"),
      validator: [
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[5]
          .getElementsByTagName("tr")[1]
          .getElementsByTagName("td")[0].childNodes[0].data,
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[20]
          .getElementsByTagName("tr")[1]
          .getElementsByTagName("td")[0].childNodes[0].data,
      ],
    },
    {
      // 2b
      question: document.querySelector(
        ".jeu-3 .question-answer-2b.question-majeur .question"
      ).innerHTML,
      armature: document.querySelector(".column-2b > svg"),
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[5]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      // 2b
      question: document.querySelector(
        ".jeu-3 .question-answer-2b.question-mineur .question"
      ).innerHTML,
      armature: document.querySelector(".column-2b > svg"),
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[20]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },

    {
      // 1b
      question: document.querySelector(".jeu-3 .question-answer-1b .question")
        .innerHTML,
      armature: document.querySelector(".column-1b > svg"),
      validator: [
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[6]
          .getElementsByTagName("tr")[1]
          .getElementsByTagName("td")[0].childNodes[0].data,
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[21]
          .getElementsByTagName("tr")[1]
          .getElementsByTagName("td")[0].childNodes[0].data,
      ],
    },
    {
      // 1b
      question: document.querySelector(
        ".jeu-3 .question-answer-1b.question-majeur .question"
      ).innerHTML,
      armature: document.querySelector(".column-1b > svg"),
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[6]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      // 1b
      question: document.querySelector(
        ".jeu-3 .question-answer-1b.question-mineur .question"
      ).innerHTML,
      armature: document.querySelector(".column-1b > svg"),
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[21]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },

    {
      // 0
      question: document.querySelector(".jeu-3 .question-answer-0 .question")
        .innerHTML,
      armature: document.querySelector(".column-0 > svg"),
      validator: [
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[7]
          .getElementsByTagName("tr")[1]
          .getElementsByTagName("td")[0].childNodes[0].data,
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[22]
          .getElementsByTagName("tr")[1]
          .getElementsByTagName("td")[0].childNodes[0].data,
      ],
    },
    {
      // 0
      question: document.querySelector(
        ".jeu-3 .question-answer-0.question-majeur .question"
      ).innerHTML,
      armature: document.querySelector(".column-1b > svg"),
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[7]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      // 0
      question: document.querySelector(
        ".jeu-3 .question-answer-0.question-mineur .question"
      ).innerHTML,
      armature: document.querySelector(".column-1b > svg"),
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[22]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },

    {
      // 1#
      question: document.querySelector(".jeu-3 .question-answer-1d .question")
        .innerHTML,
      armature: document.querySelector(".column-1d > svg"),
      validator: [
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[8]
          .getElementsByTagName("tr")[1]
          .getElementsByTagName("td")[0].childNodes[0].data,
        ,
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[23]
          .getElementsByTagName("tr")[1]
          .getElementsByTagName("td")[0].childNodes[0].data,
      ],
    },
    {
      // 1#
      question: document.querySelector(
        ".jeu-3 .question-answer-1d.question-majeur .question"
      ).innerHTML,
      armature: document.querySelector(".column-1d > svg"),
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[8]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      // 1#
      question: document.querySelector(
        ".jeu-3 .question-answer-1d.question-mineur .question"
      ).innerHTML,
      armature: document.querySelector(".column-1d > svg"),
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[23]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },

    {
      // 2#
      question: document.querySelector(".jeu-3 .question-answer-2d .question")
        .innerHTML,
      armature: document.querySelector(".column-2d > svg"),
      validator: [
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[9]
          .getElementsByTagName("tr")[1]
          .getElementsByTagName("td")[0].childNodes[0].data,
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[24]
          .getElementsByTagName("tr")[1]
          .getElementsByTagName("td")[0].childNodes[0].data,
      ],
    },
    {
      // 2#
      question: document.querySelector(
        ".jeu-3 .question-answer-2d.question-majeur .question"
      ).innerHTML,
      armature: document.querySelector(".column-2d > svg"),
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[9]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      // 2#
      question: document.querySelector(
        ".jeu-3 .question-answer-2d.question-mineur .question"
      ).innerHTML,
      armature: document.querySelector(".column-2d > svg"),
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[24]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },

    {
      // 3#
      question: document.querySelector(".jeu-3 .question-answer-3d .question")
        .innerHTML,
      armature: document.querySelector(".column-3d > svg"),
      validator: [
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[10]
          .getElementsByTagName("tr")[1]
          .getElementsByTagName("td")[0].childNodes[0].data,
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[25]
          .getElementsByTagName("tr")[1]
          .getElementsByTagName("td")[0].childNodes[0].data,
      ],
    },
    {
      // 3#
      question: document.querySelector(
        ".jeu-3 .question-answer-3d.question-majeur .question"
      ).innerHTML,
      armature: document.querySelector(".column-3d > svg"),
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[10]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      // 3#
      question: document.querySelector(
        ".jeu-3 .question-answer-3d.question-mineur .question"
      ).innerHTML,
      armature: document.querySelector(".column-3d > svg"),
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[25]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },

    {
      // 4#
      question: document.querySelector(".jeu-3 .question-answer-4d .question")
        .innerHTML,
      armature: document.querySelector(".column-4d > svg"),
      validator: [
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[11]
          .getElementsByTagName("tr")[1]
          .getElementsByTagName("td")[0].childNodes[0].data,
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[26]
          .getElementsByTagName("tr")[1]
          .getElementsByTagName("td")[0].childNodes[0].data,
      ],
    },
    {
      // 4#
      question: document.querySelector(
        ".jeu-3 .question-answer-4d.question-majeur .question"
      ).innerHTML,
      armature: document.querySelector(".column-4d > svg"),
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[11]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      // 4#
      question: document.querySelector(
        ".jeu-3 .question-answer-4d.question-mineur .question"
      ).innerHTML,
      armature: document.querySelector(".column-4d > svg"),
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[26]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },

    {
      // 5#
      question: document.querySelector(".jeu-3 .question-answer-5d .question")
        .innerHTML,
      armature: document.querySelector(".column-5d > svg"),
      validator: [
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[12]
          .getElementsByTagName("tr")[1]
          .getElementsByTagName("td")[0].childNodes[0].data,
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[27]
          .getElementsByTagName("tr")[1]
          .getElementsByTagName("td")[0].childNodes[0].data,
      ],
    },
    {
      // 5#
      question: document.querySelector(
        ".jeu-3 .question-answer-5d.question-majeur .question"
      ).innerHTML,
      armature: document.querySelector(".column-5d > svg"),
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[12]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      // 5#
      question: document.querySelector(
        ".jeu-3 .question-answer-5d.question-mineur .question"
      ).innerHTML,
      armature: document.querySelector(".column-5d > svg"),
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[27]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },

    {
      // 6#
      question: document.querySelector(".jeu-3 .question-answer-6d .question")
        .innerHTML,
      armature: document.querySelector(".column-6d > svg"),
      validator: [
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[13]
          .getElementsByTagName("tr")[1]
          .getElementsByTagName("td")[0].childNodes[0].data,
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[28]
          .getElementsByTagName("tr")[1]
          .getElementsByTagName("td")[0].childNodes[0].data,
      ],
    },
    {
      // 6#
      question: document.querySelector(
        ".jeu-3 .question-answer-6d.question-majeur .question"
      ).innerHTML,
      armature: document.querySelector(".column-6d > svg"),
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[13]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      // 6#
      question: document.querySelector(
        ".jeu-3 .question-answer-6d.question-mineur .question"
      ).innerHTML,
      armature: document.querySelector(".column-6d > svg"),
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[28]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },

    {
      // 7#
      question: document.querySelector(".jeu-3 .question-answer-7d .question")
        .innerHTML,
      armature: document.querySelector(".column-7d > svg"),
      validator: [
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[14]
          .getElementsByTagName("tr")[1]
          .getElementsByTagName("td")[0].childNodes[0].data,
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[29]
          .getElementsByTagName("tr")[1]
          .getElementsByTagName("td")[0].childNodes[0].data,
      ],
    },
    {
      // 7#
      question: document.querySelector(
        ".jeu-3 .question-answer-7d.question-majeur .question"
      ).innerHTML,
      armature: document.querySelector(".column-7d > svg"),
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[14]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      // 7#
      question: document.querySelector(
        ".jeu-3 .question-answer-7d.question-mineur .question"
      ).innerHTML,
      armature: document.querySelector(".column-7d > svg"),
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[29]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
  ];

  function getEchelle(liste) {
    let array = [];
    for (let index = 0; index < 6; index++) {
      array.push(liste.getElementsByTagName("li")[index].childNodes[0].data);
    }
    return array;
  }

  const process_jeu_4 = [
    {
      // 7b
      question: document.querySelector(
        ".jeu-4 .question-answer-7b.question-majeur .question"
      ).innerHTML,
      validator: getEchelle(
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[0]
          .getElementsByTagName("tr")[0]
          .getElementsByTagName("td")[0]
          .getElementsByTagName("ul")[0]
      ),
    },
    {
      // 7b
      question: document.querySelector(
        ".jeu-4 .question-answer-7b.question-mineur .question"
      ).innerHTML,
      validator: getEchelle(
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[15]
          .getElementsByTagName("tr")[0]
          .getElementsByTagName("td")[0]
          .getElementsByTagName("ul")[0]
      ),
    },

    {
      // 6b
      question: document.querySelector(
        ".jeu-4 .question-answer-6b.question-majeur .question"
      ).innerHTML,
      validator: getEchelle(
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[1]
          .getElementsByTagName("tr")[0]
          .getElementsByTagName("td")[0]
          .getElementsByTagName("ul")[0]
      ),
    },
    {
      // 6b
      question: document.querySelector(
        ".jeu-4 .question-answer-6b.question-mineur .question"
      ).innerHTML,
      validator: getEchelle(
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[16]
          .getElementsByTagName("tr")[0]
          .getElementsByTagName("td")[0]
          .getElementsByTagName("ul")[0]
      ),
    },

    {
      // 5b
      question: document.querySelector(
        ".jeu-4 .question-answer-5b.question-majeur .question"
      ).innerHTML,
      validator: getEchelle(
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[2]
          .getElementsByTagName("tr")[0]
          .getElementsByTagName("td")[0]
          .getElementsByTagName("ul")[0]
      ),
    },
    {
      // 5b
      question: document.querySelector(
        ".jeu-4 .question-answer-5b.question-mineur .question"
      ).innerHTML,
      validator: getEchelle(
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[17]
          .getElementsByTagName("tr")[0]
          .getElementsByTagName("td")[0]
          .getElementsByTagName("ul")[0]
      ),
    },

    {
      // 4b
      question: document.querySelector(
        ".jeu-4 .question-answer-4b.question-majeur .question"
      ).innerHTML,
      validator: getEchelle(
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[3]
          .getElementsByTagName("tr")[0]
          .getElementsByTagName("td")[0]
          .getElementsByTagName("ul")[0]
      ),
    },
    {
      // 4b
      question: document.querySelector(
        ".jeu-4 .question-answer-4b.question-mineur .question"
      ).innerHTML,
      validator: getEchelle(
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[18]
          .getElementsByTagName("tr")[0]
          .getElementsByTagName("td")[0]
          .getElementsByTagName("ul")[0]
      ),
    },

    {
      // 3b
      question: document.querySelector(
        ".jeu-4 .question-answer-3b.question-majeur .question"
      ).innerHTML,
      validator: getEchelle(
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[4]
          .getElementsByTagName("tr")[0]
          .getElementsByTagName("td")[0]
          .getElementsByTagName("ul")[0]
      ),
    },
    {
      // 3b
      question: document.querySelector(
        ".jeu-4 .question-answer-3b.question-mineur .question"
      ).innerHTML,
      validator: getEchelle(
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[19]
          .getElementsByTagName("tr")[0]
          .getElementsByTagName("td")[0]
          .getElementsByTagName("ul")[0]
      ),
    },

    {
      // 2b
      question: document.querySelector(
        ".jeu-4 .question-answer-2b.question-majeur .question"
      ).innerHTML,
      validator: getEchelle(
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[5]
          .getElementsByTagName("tr")[0]
          .getElementsByTagName("td")[0]
          .getElementsByTagName("ul")[0]
      ),
    },
    {
      // 2b
      question: document.querySelector(
        ".jeu-4 .question-answer-2b.question-mineur .question"
      ).innerHTML,
      validator: getEchelle(
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[20]
          .getElementsByTagName("tr")[0]
          .getElementsByTagName("td")[0]
          .getElementsByTagName("ul")[0]
      ),
    },

    {
      // 1b
      question: document.querySelector(
        ".jeu-4 .question-answer-1b.question-majeur .question"
      ).innerHTML,
      validator: getEchelle(
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[6]
          .getElementsByTagName("tr")[0]
          .getElementsByTagName("td")[0]
          .getElementsByTagName("ul")[0]
      ),
    },
    {
      // 1b
      question: document.querySelector(
        ".jeu-4 .question-answer-1b.question-mineur .question"
      ).innerHTML,
      validator: getEchelle(
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[21]
          .getElementsByTagName("tr")[0]
          .getElementsByTagName("td")[0]
          .getElementsByTagName("ul")[0]
      ),
    },

    {
      // 0
      question: document.querySelector(
        ".jeu-4 .question-answer-0.question-majeur .question"
      ).innerHTML,
      validator: getEchelle(
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[7]
          .getElementsByTagName("tr")[0]
          .getElementsByTagName("td")[0]
          .getElementsByTagName("ul")[0]
      ),
    },
    {
      // 0
      question: document.querySelector(
        ".jeu-4 .question-answer-0.question-mineur .question"
      ).innerHTML,
      validator: getEchelle(
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[22]
          .getElementsByTagName("tr")[0]
          .getElementsByTagName("td")[0]
          .getElementsByTagName("ul")[0]
      ),
    },

    {
      // 1#
      question: document.querySelector(
        ".jeu-4 .question-answer-1d.question-majeur .question"
      ).innerHTML,
      validator: getEchelle(
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[8]
          .getElementsByTagName("tr")[0]
          .getElementsByTagName("td")[0]
          .getElementsByTagName("ul")[0]
      ),
    },
    {
      // 1#
      question: document.querySelector(
        ".jeu-4 .question-answer-1d.question-mineur .question"
      ).innerHTML,
      validator: getEchelle(
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[23]
          .getElementsByTagName("tr")[0]
          .getElementsByTagName("td")[0]
          .getElementsByTagName("ul")[0]
      ),
    },

    {
      // 2#
      question: document.querySelector(
        ".jeu-4 .question-answer-2d.question-majeur .question"
      ).innerHTML,
      validator: getEchelle(
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[9]
          .getElementsByTagName("tr")[0]
          .getElementsByTagName("td")[0]
          .getElementsByTagName("ul")[0]
      ),
    },
    {
      // 2#
      question: document.querySelector(
        ".jeu-4 .question-answer-2d.question-mineur .question"
      ).innerHTML,
      validator: getEchelle(
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[24]
          .getElementsByTagName("tr")[0]
          .getElementsByTagName("td")[0]
          .getElementsByTagName("ul")[0]
      ),
    },

    {
      // 3#
      question: document.querySelector(
        ".jeu-4 .question-answer-3d.question-majeur .question"
      ).innerHTML,
      validator: getEchelle(
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[10]
          .getElementsByTagName("tr")[0]
          .getElementsByTagName("td")[0]
          .getElementsByTagName("ul")[0]
      ),
    },
    {
      // 3#
      question: document.querySelector(
        ".jeu-4 .question-answer-3d.question-mineur .question"
      ).innerHTML,
      validator: getEchelle(
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[25]
          .getElementsByTagName("tr")[0]
          .getElementsByTagName("td")[0]
          .getElementsByTagName("ul")[0]
      ),
    },

    {
      // 4#
      question: document.querySelector(
        ".jeu-4 .question-answer-4d.question-majeur .question"
      ).innerHTML,
      validator: getEchelle(
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[11]
          .getElementsByTagName("tr")[0]
          .getElementsByTagName("td")[0]
          .getElementsByTagName("ul")[0]
      ),
    },
    {
      // 4#
      question: document.querySelector(
        ".jeu-4 .question-answer-4d.question-mineur .question"
      ).innerHTML,
      validator: getEchelle(
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[26]
          .getElementsByTagName("tr")[0]
          .getElementsByTagName("td")[0]
          .getElementsByTagName("ul")[0]
      ),
    },

    {
      // 5#
      question: document.querySelector(
        ".jeu-4 .question-answer-5d.question-majeur .question"
      ).innerHTML,
      validator: getEchelle(
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[12]
          .getElementsByTagName("tr")[0]
          .getElementsByTagName("td")[0]
          .getElementsByTagName("ul")[0]
      ),
    },
    {
      // 5#
      question: document.querySelector(
        ".jeu-4 .question-answer-5d.question-mineur .question"
      ).innerHTML,
      validator: getEchelle(
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[27]
          .getElementsByTagName("tr")[0]
          .getElementsByTagName("td")[0]
          .getElementsByTagName("ul")[0]
      ),
    },

    {
      // 6#
      question: document.querySelector(
        ".jeu-4 .question-answer-6d.question-majeur .question"
      ).innerHTML,
      validator: getEchelle(
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[13]
          .getElementsByTagName("tr")[0]
          .getElementsByTagName("td")[0]
          .getElementsByTagName("ul")[0]
      ),
    },
    {
      // 6#
      question: document.querySelector(
        ".jeu-4 .question-answer-6d.question-mineur .question"
      ).innerHTML,
      validator: getEchelle(
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[28]
          .getElementsByTagName("tr")[0]
          .getElementsByTagName("td")[0]
          .getElementsByTagName("ul")[0]
      ),
    },

    {
      // 7#
      question: document.querySelector(
        ".jeu-4 .question-answer-7d.question-majeur .question"
      ).innerHTML,
      validator: getEchelle(
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[14]
          .getElementsByTagName("tr")[0]
          .getElementsByTagName("td")[0]
          .getElementsByTagName("ul")[0]
      ),
    },
    {
      // 7#
      question: document.querySelector(
        ".jeu-4 .question-answer-7d.question-mineur .question"
      ).innerHTML,
      validator: getEchelle(
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[29]
          .getElementsByTagName("tr")[0]
          .getElementsByTagName("td")[0]
          .getElementsByTagName("ul")[0]
      ),
    },
  ];
});
