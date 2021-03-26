let game = null;

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".jeu-1").classList.add("hidden");
  document.querySelector(".jeu-2").classList.add("hidden");
  document.querySelector(".jeu-3").classList.add("hidden");
  document.querySelector(".jeu-4").classList.add("hidden");
  document.querySelector(".jeu-5").classList.add("hidden");
  document.querySelector(".piano").classList.remove("hidden");
  document.querySelector("#connaissances").classList.add("hidden");

  VF = Vex.Flow;

  const normal = document.querySelector(".row-normal");
  const diese = document.querySelector(".row-diese");
  const bemol = document.querySelector(".row-bemol");
  const tonalites_major = document.querySelector(".row-tonalites.major");
  //const tonalites_minor = document.querySelector(".row-tonalites.minor");
  const vexflows_normal = normal.querySelectorAll("[class^=column-]");
  const vexflows_diese = diese.querySelectorAll("[class^=column-]");
  const vexflows_bemol = bemol.querySelectorAll("[class^=column-]");
  const vexflows_tonalite_major = tonalites_major.querySelectorAll("[class^=column-]");
  //const vexflows_tonalite_minor = tonalites_minor.querySelectorAll("[class^=column-]");

  const notes_normal = [
    // A quarter-note C.
    new VF.StaveNote({
      clef: "treble",
      keys: ["c/4"],
      duration: "q",
    }).addModifier(
      0,
      new VF.Annotation("do")
        .setVerticalJustification(VF.Annotation.VerticalJustify.TOP)
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
        .setVerticalJustification(VF.Annotation.VerticalJustify.TOP)
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
        .setVerticalJustification(VF.Annotation.VerticalJustify.TOP)
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
        .setVerticalJustification(VF.Annotation.VerticalJustify.TOP)
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
        .setVerticalJustification(VF.Annotation.VerticalJustify.TOP)
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
        .setVerticalJustification(VF.Annotation.VerticalJustify.TOP)
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
        .setVerticalJustification(VF.Annotation.VerticalJustify.TOP)
        .setFont("Arial", "11")
    ),

    // A quarter-note C.
    /*   new VF.StaveNote({clef: "treble", keys: ["c/5"], duration: "q", stem_direction: -1  }).addModifier(
        0,
        new VF.Annotation('do').setVerticalJustification(VF.Annotation.VerticalJustify.TOP).setFont('Arial', '11')
      ), */
  ];

  const notes_diese = [
    // A quarter-note C.
    new VF.StaveNote({ clef: "treble", keys: ["c/4"], duration: "q" })
      .addAccidental(0, new VF.Accidental("#"))
      .addModifier(
        0,
        new VF.Annotation("do\u266F")
          .setVerticalJustification(VF.Annotation.VerticalJustify.TOP)
          .setFont("Arial", "11")
      ),

    // A quarter-note D.
    new VF.StaveNote({ clef: "treble", keys: ["d/4"], duration: "q" })
      .addAccidental(0, new VF.Accidental("#"))
      .addModifier(
        0,
        new VF.Annotation("ré\u266F")
          .setVerticalJustification(VF.Annotation.VerticalJustify.TOP)
          .setFont("Arial", "11")
      ),

    // A quarter-note E.
    new VF.StaveNote({ clef: "treble", keys: ["e/4"], duration: "q" })
      .addAccidental(0, new VF.Accidental("#"))
      .addModifier(
        0,
        new VF.Annotation("mi\u266F")
          .setVerticalJustification(VF.Annotation.VerticalJustify.TOP)
          .setFont("Arial", "11")
      ),

    // A quarter-note F.
    new VF.StaveNote({ clef: "treble", keys: ["f/4"], duration: "q" })
      .addAccidental(0, new VF.Accidental("#"))
      .addModifier(
        0,
        new VF.Annotation("fa\u266F")
          .setVerticalJustification(VF.Annotation.VerticalJustify.TOP)
          .setFont("Arial", "11")
      ),

    // A quarter-note G.
    new VF.StaveNote({ clef: "treble", keys: ["g/4"], duration: "q" })
      .addAccidental(0, new VF.Accidental("#"))
      .addModifier(
        0,
        new VF.Annotation("sol\u266F")
          .setVerticalJustification(VF.Annotation.VerticalJustify.TOP)
          .setFont("Arial", "11")
      ),

    // A quarter-note A.
    new VF.StaveNote({ clef: "treble", keys: ["a/4"], duration: "q" })
      .addAccidental(0, new VF.Accidental("#"))
      .addModifier(
        0,
        new VF.Annotation("la\u266F")
          .setVerticalJustification(VF.Annotation.VerticalJustify.TOP)
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
          .setVerticalJustification(VF.Annotation.VerticalJustify.TOP)
          .setFont("Arial", "11")
      ),

    // A quarter-note C.
    /*     new VF.StaveNote({clef: "treble", keys: ["c/5"], duration: "q", stem_direction: -1}).addAccidental(0, new VF.Accidental('#')).addModifier(
          0,
          new VF.Annotation('do\u266F').setVerticalJustification(VF.Annotation.VerticalJustify.TOP).setFont('Arial', '11')
        ), */
  ];

  const notes_bemol = [
    // A quarter-note C.
    new VF.StaveNote({ clef: "treble", keys: ["c/4"], duration: "q" })
      .addAccidental(0, new VF.Accidental("b"))
      .addModifier(
        0,
        new VF.Annotation("do\u266D")
          .setVerticalJustification(VF.Annotation.VerticalJustify.TOP)
          .setFont("Arial", "11")
      ),

    // A quarter-note D.
    new VF.StaveNote({ clef: "treble", keys: ["d/4"], duration: "q" })
      .addAccidental(0, new VF.Accidental("b"))
      .addModifier(
        0,
        new VF.Annotation("ré\u266D")
          .setVerticalJustification(VF.Annotation.VerticalJustify.TOP)
          .setFont("Arial", "11")
      ),

    // A quarter-note E.
    new VF.StaveNote({ clef: "treble", keys: ["e/4"], duration: "q" })
      .addAccidental(0, new VF.Accidental("b"))
      .addModifier(
        0,
        new VF.Annotation("mi\u266D")
          .setVerticalJustification(VF.Annotation.VerticalJustify.TOP)
          .setFont("Arial", "11")
      ),

    // A quarter-note F.
    new VF.StaveNote({ clef: "treble", keys: ["f/4"], duration: "q" })
      .addAccidental(0, new VF.Accidental("b"))
      .addModifier(
        0,
        new VF.Annotation("fa\u266D")
          .setVerticalJustification(VF.Annotation.VerticalJustify.TOP)
          .setFont("Arial", "11")
      ),

    // A quarter-note G.
    new VF.StaveNote({ clef: "treble", keys: ["g/4"], duration: "q" })
      .addAccidental(0, new VF.Accidental("b"))
      .addModifier(
        0,
        new VF.Annotation("sol\u266D")
          .setVerticalJustification(VF.Annotation.VerticalJustify.TOP)
          .setFont("Arial", "11")
      ),

    // A quarter-note A.
    new VF.StaveNote({ clef: "treble", keys: ["a/4"], duration: "q" })
      .addAccidental(0, new VF.Accidental("b"))
      .addModifier(
        0,
        new VF.Annotation("la\u266D")
          .setVerticalJustification(VF.Annotation.VerticalJustify.TOP)
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
          .setVerticalJustification(VF.Annotation.VerticalJustify.TOP)
          .setFont("Arial", "11")
      ),

    // A quarter-note C.
    /*   new VF.StaveNote({clef: "treble", keys: ["c/5"], duration: "q", stem_direction: -1}).addAccidental(0, new VF.Accidental('b')).addModifier(
        0,
        new VF.Annotation('do\u266D').setVerticalJustification(VF.Annotation.VerticalJustify.TOP).setFont('Arial', '11')
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

  vexflows_normal.forEach(createVexflow, notes_normal);
  vexflows_diese.forEach(createVexflow, notes_diese);
  vexflows_bemol.forEach(createVexflow, notes_bemol);
  vexflows_tonalite_major.forEach(createVexflowSignature, majorKeys);
  //vexflows_tonalite_minor.forEach(createVexflowSignature,minorKeys);

  function createVexflow(item, index) {
    // Create an SVG renderer and attach it to the DIV element named "column-".
    var div = item;
    var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

    // Configure the rendering context.
    renderer.resize(100, 100);
    var context = renderer.getContext();
    context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");
    //context.setViewBox(0, 0, 270, 270);

    // Create a stave of width 100 at position 0, 150 on the canvas
    var stave = new VF.Stave(0, 0, 100);
    stave.addClef("treble");

    // Connect it to the rendering context and draw!
    stave.setContext(context).draw();

    var note = [
      // A quarter-note C.
      this[index],
    ];

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
    renderer.resize(100, 100);
    var context = renderer.getContext();
    context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");
    var stave = new VF.Stave(0, 0, 100);
    stave.addClef("treble");
    stave.setText(annotation_tonalites[index], VF.Modifier.Position.ABOVE);

    stave.setKeySignature(this[index]);

    // Connect it to the rendering context and draw!
    stave.setContext(context).draw();
  }

  const process_jeu_1 = [
    {
      question: document.querySelector(
        ".jeu-1 .question-answer-7b.question-tonique.question-majeur .question"
      ).innerHTML,
      type: "majeur",
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
      type: "majeur",
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
      type: "majeur",
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
      type: "majeur",
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
      type: "mineur",
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
      type: "mineur",
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
      type: "mineur",
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
      type: "mineur",
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
      type: "majeur",
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
      type: "majeur",
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
      type: "majeur",
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
      type: "majeur",
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
      type: "mineur",
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
      type: "mineur",
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
      type: "mineur",
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
      type: "mineur",
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
      type: "majeur",
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
      type: "majeur",
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
      type: "majeur",
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
      type: "majeur",
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
      type: "mineur",
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
      type: "mineur",
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
      type: "mineur",
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
      type: "mineur",
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
      type: "majeur",
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
      type: "majeur",
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
      type: "majeur",
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
      type: "majeur",
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
      type: "mineur",
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
      type: "mineur",
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
      type: "mineur",
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
      type: "mineur",
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
      type: "majeur",
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
      type: "majeur",
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
      type: "majeur",
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
      type: "majeur",
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
      type: "mineur",
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
      type: "mineur",
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
      type: "mineur",
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
      type: "mineur",
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
      type: "majeur",
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
      type: "majeur",
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
      type: "majeur",
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
      type: "majeur",
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
      type: "mineur",
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
      type: "mineur",
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
      type: "mineur",
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
      type: "mineur",
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
      type: "majeur",
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
      type: "majeur",
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
      type: "majeur",
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
      type: "majeur",
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
      type: "mineur",
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
      type: "mineur",
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
      type: "mineur",
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
      type: "mineur",
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
      type: "majeur",
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
      type: "majeur",
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
      type: "majeur",
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
      type: "majeur",
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
      type: "mineur",
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
      type: "mineur",
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
      type: "mineur",
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
      type: "mineur",
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
      type: "majeur",
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
      type: "majeur",
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
      type: "majeur",
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
      type: "majeur",
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
      type: "mineur",
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
      type: "mineur",
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
      type: "mineur",
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
      type: "mineur",
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
      type: "majeur",
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
      type: "majeur",
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
      type: "majeur",
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
      type: "majeur",
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
      type: "mineur",
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
      type: "mineur",
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
      type: "mineur",
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
      type: "mineur",
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
      type: "majeur",
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
      type: "majeur",
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
      type: "majeur",
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
      type: "majeur",
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
      type: "mineur",
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
      type: "mineur",
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
      type: "mineur",
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
      type: "mineur",
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
      type: "majeur",
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
      type: "majeur",
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
      type: "majeur",
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
      type: "majeur",
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
      type: "mineur",
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
      type: "mineur",
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
      type: "mineur",
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
      type: "mineur",
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
      type: "majeur",
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
      type: "majeur",
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
      type: "majeur",
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
      type: "majeur",
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
      type: "mineur",
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
      type: "mineur",
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
      type: "mineur",
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
      type: "mineur",
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
      type: "majeur",
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
      type: "majeur",
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
      type: "majeur",
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
      type: "majeur",
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
      type: "mineur",
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
      type: "mineur",
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
      type: "mineur",
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
      type: "mineur",
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
      type: "majeur",
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
      type: "majeur",
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
      type: "majeur",
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
      type: "majeur",
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
      type: "mineur",
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
      type: "mineur",
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
      type: "mineur",
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
      type: "mineur",
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
      question: document.querySelector(".jeu-2 .question-answer-7b.question-majeur .question")
        .innerHTML,
      type: "majeur",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[1]
        .childNodes[0].data,
    },
    {
      // 7b
      question: document.querySelector(".jeu-2 .question-answer-7b.question-mineur .question")
        .innerHTML,
      type: "mineur",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[1]
        .childNodes[0].data,
    },

    {
      // 6b
      question: document.querySelector(".jeu-2 .question-answer-6b.question-majeur .question")
        .innerHTML,
      type: "majeur",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[2]
        .childNodes[0].data,
    },
    {
      // 6b
      question: document.querySelector(".jeu-2 .question-answer-6b.question-mineur .question")
        .innerHTML,
      type: "mineur",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[2]
        .childNodes[0].data,
    },

    {
      // 5b
      question: document.querySelector(".jeu-2 .question-answer-5b.question-majeur .question")
        .innerHTML,
      type: "majeur",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[3]
        .childNodes[0].data,
    },
    {
      // 5b
      question: document.querySelector(".jeu-2 .question-answer-5b.question-mineur .question")
        .innerHTML,
      type: "mineur",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[3]
        .childNodes[0].data,
    },

    {
      // 4b
      question: document.querySelector(".jeu-2 .question-answer-4b.question-majeur .question")
        .innerHTML,
      type: "majeur",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[4]
        .childNodes[0].data,
    },
    {
      // 4b
      question: document.querySelector(".jeu-2 .question-answer-4b.question-mineur .question")
        .innerHTML,
      type: "mineur",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[4]
        .childNodes[0].data,
    },

    {
      // 3b
      question: document.querySelector(".jeu-2 .question-answer-3b.question-majeur .question")
        .innerHTML,
      type: "majeur",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[5]
        .childNodes[0].data,
    },
    {
      // 3b
      question: document.querySelector(".jeu-2 .question-answer-3b.question-mineur .question")
        .innerHTML,
      type: "mineur",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[5]
        .childNodes[0].data,
    },

    {
      // 2b
      question: document.querySelector(".jeu-2 .question-answer-2b.question-majeur .question")
        .innerHTML,
      type: "majeur",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[6]
        .childNodes[0].data,
    },
    {
      // 2b
      question: document.querySelector(".jeu-2 .question-answer-2b.question-mineur .question")
        .innerHTML,
      type: "mineur",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[6]
        .childNodes[0].data,
    },

    {
      // 1b
      question: document.querySelector(".jeu-2 .question-answer-1b.question-majeur .question")
        .innerHTML,
      type: "majeur",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[7]
        .childNodes[0].data,
    },
    {
      // 1b
      question: document.querySelector(".jeu-2 .question-answer-1b.question-mineur .question")
        .innerHTML,
      type: "mineur",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[7]
        .childNodes[0].data,
    },

    {
      // 0
      question: document.querySelector(".jeu-2 .question-answer-0.question-majeur .question")
        .innerHTML,
      type: "majeur",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[8]
        .childNodes[0].data,
    },
    {
      // 0
      question: document.querySelector(".jeu-2 .question-answer-0.question-mineur .question")
        .innerHTML,
      type: "mineur",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[8]
        .childNodes[0].data,
    },

    {
      // 1#
      question: document.querySelector(".jeu-2 .question-answer-1d.question-majeur .question")
        .innerHTML,
      type: "majeur",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[9]
        .childNodes[0].data,
    },
    {
      // 1#
      question: document.querySelector(".jeu-2 .question-answer-1d.question-mineur .question")
        .innerHTML,
      type: "mineur",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[9]
        .childNodes[0].data,
    },

    {
      // 2#
      question: document.querySelector(".jeu-2 .question-answer-2d.question-majeur .question")
        .innerHTML,
      type: "majeur",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[10]
        .childNodes[0].data,
    },
    {
      // 2#
      question: document.querySelector(".jeu-2 .question-answer-2d.question-mineur .question")
        .innerHTML,
      type: "mineur",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[10]
        .childNodes[0].data,
    },

    {
      // 3#
      question: document.querySelector(".jeu-2 .question-answer-3d.question-majeur .question")
        .innerHTML,
      type: "majeur",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[11]
        .childNodes[0].data,
    },
    {
      // 3#
      question: document.querySelector(".jeu-2 .question-answer-3d.question-mineur .question")
        .innerHTML,
      type: "mineur",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[11]
        .childNodes[0].data,
    },

    {
      // 4#
      question: document.querySelector(".jeu-2 .question-answer-4d.question-majeur .question")
        .innerHTML,
      type: "majeur",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[12]
        .childNodes[0].data,
    },
    {
      // 4#
      question: document.querySelector(".jeu-2 .question-answer-4d.question-mineur .question")
        .innerHTML,
      type: "mineur",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[12]
        .childNodes[0].data,
    },

    {
      // 5#
      question: document.querySelector(".jeu-2 .question-answer-5d.question-majeur .question")
        .innerHTML,
      type: "majeur",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[13]
        .childNodes[0].data,
    },
    {
      // 5#
      question: document.querySelector(".jeu-2 .question-answer-5d.question-mineur .question")
        .innerHTML,
      type: "mineur",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[13]
        .childNodes[0].data,
    },

    {
      // 6#
      question: document.querySelector(".jeu-2 .question-answer-6d.question-majeur .question")
        .innerHTML,
      type: "majeur",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[14]
        .childNodes[0].data,
    },
    {
      // 6#
      question: document.querySelector(".jeu-2 .question-answer-6d.question-mineur .question")
        .innerHTML,
      type: "mineur",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[14]
        .childNodes[0].data,
    },

    {
      // 7#
      question: document.querySelector(".jeu-2 .question-answer-7d.question-majeur .question")
        .innerHTML,
      type: "majeur",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[15]
        .childNodes[0].data,
    },
    {
      // 7#
      question: document.querySelector(".jeu-2 .question-answer-7d.question-mineur .question")
        .innerHTML,
      type: "mineur",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[15]
        .childNodes[0].data,
    },
  ];

  const process_jeu_3 = [
    {
      /*  */ // 7b
      question: document.querySelector(".jeu-3 .question-answer-7b .question").innerHTML,
      type: "global",
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
      question: document.querySelector(".jeu-3 .question-answer-7b.question-majeur .question")
        .innerHTML,
      type: "majeur",
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[0]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      // 7b
      question: document.querySelector(".jeu-3 .question-answer-7b.question-mineur .question")
        .innerHTML,
      type: "mineur",
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[15]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },

    {
      // 6b
      question: document.querySelector(".jeu-3 .question-answer-6b .question").innerHTML,
      type: "global",
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
      question: document.querySelector(".jeu-3 .question-answer-6b.question-majeur .question")
        .innerHTML,
      type: "majeur",
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[1]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      // 6b
      question: document.querySelector(".jeu-3 .question-answer-6b.question-mineur .question")
        .innerHTML,
      type: "mineur",
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[16]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },

    {
      // 5b
      question: document.querySelector(".jeu-3 .question-answer-5b .question").innerHTML,
      type: "global",
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
      question: document.querySelector(".jeu-3 .question-answer-5b.question-majeur .question")
        .innerHTML,
      type: "majeur",
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[2]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      // 5b
      question: document.querySelector(".jeu-3 .question-answer-5b.question-mineur .question")
        .innerHTML,
      type: "mineur",
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[17]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },

    {
      // 4b
      question: document.querySelector(".jeu-3 .question-answer-4b .question").innerHTML,
      type: "global",
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
      question: document.querySelector(".jeu-3 .question-answer-4b.question-majeur .question")
        .innerHTML,
      type: "majeur",
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[3]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      // 4b
      question: document.querySelector(".jeu-3 .question-answer-4b.question-mineur .question")
        .innerHTML,
      type: "mineur",
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[18]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },

    {
      // 3b
      question: document.querySelector(".jeu-3 .question-answer-3b .question").innerHTML,
      type: "global",
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
      question: document.querySelector(".jeu-3 .question-answer-3b.question-majeur .question")
        .innerHTML,
      type: "majeur",
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[4]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      // 3b
      question: document.querySelector(".jeu-3 .question-answer-3b.question-mineur .question")
        .innerHTML,
      type: "mineur",
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[19]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },

    {
      // 2b
      question: document.querySelector(".jeu-3 .question-answer-2b .question").innerHTML,
      type: "global",
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
      question: document.querySelector(".jeu-3 .question-answer-2b.question-majeur .question")
        .innerHTML,
      type: "majeur",
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[5]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      // 2b
      question: document.querySelector(".jeu-3 .question-answer-2b.question-mineur .question")
        .innerHTML,
      type: "mineur",
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[20]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },

    {
      // 1b
      question: document.querySelector(".jeu-3 .question-answer-1b .question").innerHTML,
      type: "global",
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
      question: document.querySelector(".jeu-3 .question-answer-1b.question-majeur .question")
        .innerHTML,
      type: "majeur",
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[6]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      // 1b
      question: document.querySelector(".jeu-3 .question-answer-1b.question-mineur .question")
        .innerHTML,
      type: "mineur",
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[21]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },

    {
      // 0
      question: document.querySelector(".jeu-3 .question-answer-0 .question").innerHTML,
      type: "global",
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
      question: document.querySelector(".jeu-3 .question-answer-0.question-majeur .question")
        .innerHTML,
      type: "majeur",
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[7]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      // 0
      question: document.querySelector(".jeu-3 .question-answer-0.question-mineur .question")
        .innerHTML,
      type: "mineur",
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[22]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },

    {
      // 1#
      question: document.querySelector(".jeu-3 .question-answer-1d .question").innerHTML,
      type: "global",
      validator: [
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[8]
          .getElementsByTagName("tr")[1]
          .getElementsByTagName("td")[0].childNodes[0].data,
        document
          .querySelector("#connaissances")
          .getElementsByTagName("table")[23]
          .getElementsByTagName("tr")[1]
          .getElementsByTagName("td")[0].childNodes[0].data,
      ],
    },
    {
      // 1#
      question: document.querySelector(".jeu-3 .question-answer-1d.question-majeur .question")
        .innerHTML,
      type: "majeur",
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[8]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      // 1#
      question: document.querySelector(".jeu-3 .question-answer-1d.question-mineur .question")
        .innerHTML,
      type: "mineur",
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[23]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },

    {
      // 2#
      question: document.querySelector(".jeu-3 .question-answer-2d .question").innerHTML,
      type: "global",
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
      question: document.querySelector(".jeu-3 .question-answer-2d.question-majeur .question")
        .innerHTML,
      type: "majeur",
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[9]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      // 2#
      question: document.querySelector(".jeu-3 .question-answer-2d.question-mineur .question")
        .innerHTML,
      type: "mineur",
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[24]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },

    {
      // 3#
      question: document.querySelector(".jeu-3 .question-answer-3d .question").innerHTML,
      type: "global",
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
      question: document.querySelector(".jeu-3 .question-answer-3d.question-majeur .question")
        .innerHTML,
      type: "majeur",
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[10]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      // 3#
      question: document.querySelector(".jeu-3 .question-answer-3d.question-mineur .question")
        .innerHTML,
      type: "mineur",
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[25]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },

    {
      // 4#
      question: document.querySelector(".jeu-3 .question-answer-4d .question").innerHTML,
      type: "global",
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
      question: document.querySelector(".jeu-3 .question-answer-4d.question-majeur .question")
        .innerHTML,
      type: "majeur",
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[11]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      // 4#
      question: document.querySelector(".jeu-3 .question-answer-4d.question-mineur .question")
        .innerHTML,
      type: "mineur",
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[26]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },

    {
      // 5#
      question: document.querySelector(".jeu-3 .question-answer-5d .question").innerHTML,
      type: "global",
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
      question: document.querySelector(".jeu-3 .question-answer-5d.question-majeur .question")
        .innerHTML,
      type: "majeur",
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[12]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      // 5#
      question: document.querySelector(".jeu-3 .question-answer-5d.question-mineur .question")
        .innerHTML,
      type: "mineur",
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[27]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },

    {
      // 6#
      question: document.querySelector(".jeu-3 .question-answer-6d .question").innerHTML,
      type: "global",
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
      question: document.querySelector(".jeu-3 .question-answer-6d.question-majeur .question")
        .innerHTML,
      type: "majeur",
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[13]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      // 6#
      question: document.querySelector(".jeu-3 .question-answer-6d.question-mineur .question")
        .innerHTML,
      type: "mineur",
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[28]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },

    {
      // 7#
      question: document.querySelector(".jeu-3 .question-answer-7d .question").innerHTML,
      type: "global",
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
      question: document.querySelector(".jeu-3 .question-answer-7d.question-majeur .question")
        .innerHTML,
      type: "majeur",
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[14]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      // 7#
      question: document.querySelector(".jeu-3 .question-answer-7d.question-mineur .question")
        .innerHTML,
      type: "mineur",
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
      question: document.querySelector(".jeu-4 .question-answer-7b.question-majeur .question")
        .innerHTML,
      type: "majeur",
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
      question: document.querySelector(".jeu-4 .question-answer-7b.question-mineur .question")
        .innerHTML,
      type: "mineur",
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
      question: document.querySelector(".jeu-4 .question-answer-6b.question-majeur .question")
        .innerHTML,
      type: "majeur",
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
      question: document.querySelector(".jeu-4 .question-answer-6b.question-mineur .question")
        .innerHTML,
      type: "mineur",
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
      question: document.querySelector(".jeu-4 .question-answer-5b.question-majeur .question")
        .innerHTML,
      type: "majeur",
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
      question: document.querySelector(".jeu-4 .question-answer-5b.question-mineur .question")
        .innerHTML,
      type: "mineur",
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
      question: document.querySelector(".jeu-4 .question-answer-4b.question-majeur .question")
        .innerHTML,
      type: "majeur",
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
      question: document.querySelector(".jeu-4 .question-answer-4b.question-mineur .question")
        .innerHTML,
      type: "mineur",
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
      question: document.querySelector(".jeu-4 .question-answer-3b.question-majeur .question")
        .innerHTML,
      type: "majeur",
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
      question: document.querySelector(".jeu-4 .question-answer-3b.question-mineur .question")
        .innerHTML,
      type: "mineur",
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
      question: document.querySelector(".jeu-4 .question-answer-2b.question-majeur .question")
        .innerHTML,
      type: "majeur",
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
      question: document.querySelector(".jeu-4 .question-answer-2b.question-mineur .question")
        .innerHTML,
      type: "mineur",
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
      question: document.querySelector(".jeu-4 .question-answer-1b.question-majeur .question")
        .innerHTML,
      type: "majeur",
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
      question: document.querySelector(".jeu-4 .question-answer-1b.question-mineur .question")
        .innerHTML,
      type: "mineur",
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
      question: document.querySelector(".jeu-4 .question-answer-0.question-majeur .question")
        .innerHTML,
      type: "majeur",
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
      question: document.querySelector(".jeu-4 .question-answer-0.question-mineur .question")
        .innerHTML,
      type: "mineur",
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
      question: document.querySelector(".jeu-4 .question-answer-1d.question-majeur .question")
        .innerHTML,
      type: "majeur",
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
      question: document.querySelector(".jeu-4 .question-answer-1d.question-mineur .question")
        .innerHTML,
      type: "mineur",
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
      question: document.querySelector(".jeu-4 .question-answer-2d.question-majeur .question")
        .innerHTML,
      type: "majeur",
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
      question: document.querySelector(".jeu-4 .question-answer-2d.question-mineur .question")
        .innerHTML,
      type: "mineur",
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
      question: document.querySelector(".jeu-4 .question-answer-3d.question-majeur .question")
        .innerHTML,
      type: "majeur",
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
      question: document.querySelector(".jeu-4 .question-answer-3d.question-mineur .question")
        .innerHTML,
      type: "mineur",
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
      question: document.querySelector(".jeu-4 .question-answer-4d.question-majeur .question")
        .innerHTML,
      type: "majeur",
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
      question: document.querySelector(".jeu-4 .question-answer-4d.question-mineur .question")
        .innerHTML,
      type: "mineur",
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
      question: document.querySelector(".jeu-4 .question-answer-5d.question-majeur .question")
        .innerHTML,
      type: "majeur",
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
      question: document.querySelector(".jeu-4 .question-answer-5d.question-mineur .question")
        .innerHTML,
      type: "mineur",
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
      question: document.querySelector(".jeu-4 .question-answer-6d.question-majeur .question")
        .innerHTML,
      type: "majeur",
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
      question: document.querySelector(".jeu-4 .question-answer-6d.question-mineur .question")
        .innerHTML,
      type: "mineur",
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
      question: document.querySelector(".jeu-4 .question-answer-7d.question-majeur .question")
        .innerHTML,
      type: "majeur",
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
      question: document.querySelector(".jeu-4 .question-answer-7d.question-mineur .question")
        .innerHTML,
      type: "mineur",
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

  const process_jeu_5 = [
    {
      /*  */ // 7b
      question: document.querySelector(".jeu-5 .question-answer-7b .question").innerHTML,
      type: "global",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[1]
        .childNodes[0].data,
    },
    {
      // 7b
      question: document.querySelector(".jeu-5 .question-answer-7b.question-majeur .question")
        .innerHTML,
      type: "majeur",
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[0]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      // 7b
      question: document.querySelector(".jeu-5 .question-answer-7b.question-mineur .question")
        .innerHTML,
      type: "mineur",
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[15]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },

    {
      // 6b
      question: document.querySelector(".jeu-5 .question-answer-6b .question").innerHTML,
      type: "global",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[2]
        .childNodes[0].data,
    },
    {
      // 6b
      question: document.querySelector(".jeu-5 .question-answer-6b.question-majeur .question")
        .innerHTML,
      type: "majeur",
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[1]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      // 6b
      question: document.querySelector(".jeu-5 .question-answer-6b.question-mineur .question")
        .innerHTML,
      type: "mineur",
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[16]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },

    {
      // 5b
      question: document.querySelector(".jeu-5 .question-answer-5b .question").innerHTML,
      type: "global",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[3]
        .childNodes[0].data,
    },
    {
      // 5b
      question: document.querySelector(".jeu-5 .question-answer-5b.question-majeur .question")
        .innerHTML,
      type: "majeur",
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[2]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      // 5b
      question: document.querySelector(".jeu-5 .question-answer-5b.question-mineur .question")
        .innerHTML,
      type: "mineur",
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[17]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },

    {
      // 4b
      question: document.querySelector(".jeu-5 .question-answer-4b .question").innerHTML,
      type: "global",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[4]
        .childNodes[0].data,
    },
    {
      // 4b
      question: document.querySelector(".jeu-5 .question-answer-4b.question-majeur .question")
        .innerHTML,
      type: "majeur",
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[3]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      // 4b
      question: document.querySelector(".jeu-5 .question-answer-4b.question-mineur .question")
        .innerHTML,
      type: "mineur",
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[18]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },

    {
      // 3b
      question: document.querySelector(".jeu-5 .question-answer-3b .question").innerHTML,
      type: "global",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[5]
        .childNodes[0].data,
    },
    {
      // 3b
      question: document.querySelector(".jeu-5 .question-answer-3b.question-majeur .question")
        .innerHTML,
      type: "majeur",
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[4]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      // 3b
      question: document.querySelector(".jeu-5 .question-answer-3b.question-mineur .question")
        .innerHTML,
      type: "mineur",
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[19]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },

    {
      // 2b
      question: document.querySelector(".jeu-5 .question-answer-2b .question").innerHTML,
      type: "global",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[6]
        .childNodes[0].data,
    },
    {
      // 2b
      question: document.querySelector(".jeu-5 .question-answer-2b.question-majeur .question")
        .innerHTML,
      type: "majeur",
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[5]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      // 2b
      question: document.querySelector(".jeu-5 .question-answer-2b.question-mineur .question")
        .innerHTML,
      type: "mineur",
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[20]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },

    {
      // 1b
      question: document.querySelector(".jeu-5 .question-answer-1b .question").innerHTML,
      type: "global",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[7]
        .childNodes[0].data,
    },
    {
      // 1b
      question: document.querySelector(".jeu-5 .question-answer-1b.question-majeur .question")
        .innerHTML,
      type: "majeur",
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[6]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      // 1b
      question: document.querySelector(".jeu-5 .question-answer-1b.question-mineur .question")
        .innerHTML,
      type: "mineur",
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[21]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },

    {
      // 0
      question: document.querySelector(".jeu-5 .question-answer-0 .question").innerHTML,
      type: "global",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[8]
        .childNodes[0].data,
    },
    {
      // 0
      question: document.querySelector(".jeu-5 .question-answer-0.question-majeur .question")
        .innerHTML,
      type: "majeur",
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[7]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      // 0
      question: document.querySelector(".jeu-5 .question-answer-0.question-mineur .question")
        .innerHTML,
      type: "mineur",
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[22]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },

    {
      // 1#
      question: document.querySelector(".jeu-5 .question-answer-1d .question").innerHTML,
      type: "global",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[9]
        .childNodes[0].data,
    },
    {
      // 1#
      question: document.querySelector(".jeu-5 .question-answer-1d.question-majeur .question")
        .innerHTML,
      type: "majeur",
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[8]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      // 1#
      question: document.querySelector(".jeu-5 .question-answer-1d.question-mineur .question")
        .innerHTML,
      type: "mineur",
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[23]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },

    {
      // 2#
      question: document.querySelector(".jeu-5 .question-answer-2d .question").innerHTML,
      type: "global",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[10]
        .childNodes[0].data,
    },
    {
      // 2#
      question: document.querySelector(".jeu-5 .question-answer-2d.question-majeur .question")
        .innerHTML,
      type: "majeur",
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[9]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      // 2#
      question: document.querySelector(".jeu-5 .question-answer-2d.question-mineur .question")
        .innerHTML,
      type: "mineur",
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[24]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },

    {
      // 3#
      question: document.querySelector(".jeu-5 .question-answer-3d .question").innerHTML,
      type: "global",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[11]
        .childNodes[0].data,
    },
    {
      // 3#
      question: document.querySelector(".jeu-5 .question-answer-3d.question-majeur .question")
        .innerHTML,
      type: "majeur",
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[10]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      // 3#
      question: document.querySelector(".jeu-5 .question-answer-3d.question-mineur .question")
        .innerHTML,
      type: "mineur",
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[25]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },

    {
      // 4#
      question: document.querySelector(".jeu-5 .question-answer-4d .question").innerHTML,
      type: "global",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[12]
        .childNodes[0].data,
    },
    {
      // 4#
      question: document.querySelector(".jeu-5 .question-answer-4d.question-majeur .question")
        .innerHTML,
      type: "majeur",
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[11]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      // 4#
      question: document.querySelector(".jeu-5 .question-answer-4d.question-mineur .question")
        .innerHTML,
      type: "mineur",
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[26]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },

    {
      // 5#
      question: document.querySelector(".jeu-5 .question-answer-5d .question").innerHTML,
      type: "global",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[13]
        .childNodes[0].data,
    },
    {
      // 5#
      question: document.querySelector(".jeu-5 .question-answer-5d.question-majeur .question")
        .innerHTML,
      type: "majeur",
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[12]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      // 5#
      question: document.querySelector(".jeu-5 .question-answer-5d.question-mineur .question")
        .innerHTML,
      type: "mineur",
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[27]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },

    {
      // 6#
      question: document.querySelector(".jeu-5 .question-answer-6d .question").innerHTML,
      type: "global",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[14]
        .childNodes[0].data,
    },
    {
      // 6#
      question: document.querySelector(".jeu-5 .question-answer-6d.question-majeur .question")
        .innerHTML,
      type: "majeur",
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[13]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      // 6#
      question: document.querySelector(".jeu-5 .question-answer-6d.question-mineur .question")
        .innerHTML,
      type: "mineur",
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[28]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },

    {
      // 7#
      question: document.querySelector(".jeu-5 .question-answer-7d .question").innerHTML,
      type: "global",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[15]
        .childNodes[0].data,
    },
    {
      // 7#
      question: document.querySelector(".jeu-5 .question-answer-7d.question-majeur .question")
        .innerHTML,
      type: "majeur",
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[14]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
    {
      // 7#
      question: document.querySelector(".jeu-5 .question-answer-7d.question-mineur .question")
        .innerHTML,
      type: "mineur",
      validator: document
        .querySelector("#connaissances")
        .getElementsByTagName("table")[29]
        .getElementsByTagName("tr")[1]
        .getElementsByTagName("td")[0].childNodes[0].data,
    },
  ];

  class Game {
    constructor(data) {
      this.score = 0;
      this.currentQuestion = null;
      this.currentType = null;
      this.currentAnswer = null;
      this.timeLeft = 1000;
      this.timer = null;
      this.data = data;
    }

    getNextQuestion() {
      const random = Math.floor(Math.random() * this.data.length);
      this.currentQuestion = this.data[random].question;
      this.currentType = this.data[random].type;
      this.currentAnswer = this.data[random].validator;
      this.data.splice(random, 1);
      console.log(this.currentQuestion);
      console.log(this.currentAnswer);
    }

    start() {
      this.getNextQuestion();
      this.updateTimer();
      this.timer = setInterval(this.updateTimer.bind(this), 1000);
    }

    updateTimer() {
      this.timeLeft = this.timeLeft - 1;
      if (this.timeLeft <= 0) {
        this.gameOver();
      }
    }

    gameOver() {
      console.log("GAME OVER");
      document.querySelector(".piano").classList.add("hidden");
      window.removeEventListener("keydown", playSound);
      clearInterval(this.timer);
    }

    checkAnswer(state, target) {
      // overridé dans ses enfants
    }

    createVexButtons(classe, values, type) {
      const children = document.querySelector(`.${classe}`).children;
      for (let index = 0; index < children.length; index++) {
        const input = document.createElement("input");
        input.setAttribute("type", type);
        input.setAttribute("name", "notes");
        input.setAttribute("value", values[index]);
        input.setAttribute("id", values[index]);
        const label = document.createElement("label");
        label.setAttribute("for", values[index]);
        const svg = children[index].children[0];
        label.appendChild(svg);
        children[index].appendChild(input);
        children[index].appendChild(label);
      }
    }

    checkVexflowUniqueChoice(target) {
      if (target.id == game.currentAnswer) {
        game.score++;
        target.parentElement.classList.add("active-right");
        setTimeout(() => {
          target.parentElement.classList.remove("active-right");
          target.checked = false;
        }, 1500);
      } else {
        target.parentElement.classList.add("active-wrong");
        const target_right = document.getElementById(game.currentAnswer);
        target_right.parentElement.classList.add("active-right");
        setTimeout(() => {
          target.parentElement.classList.remove("active-wrong");
          target_right.parentElement.classList.remove("active-right");
          target.checked = false;
        }, 1500);
      }
    }

    checkVexflowMultipleChoices(target, round) {
      let find = false;
      for (let index = 0; index < round; index++) {
        if (target.id == game.currentAnswer[index]) {
          game.currentAnswer.splice(index, 1);
          target.parentElement.classList.add("active-right");
          find = true;
        }
      }
      if (!find) {
        target.parentElement.classList.add("active-wrong");
        for (let index = 0; index < round; index++) {
          document
            .querySelector(`#${game.currentAnswer[index]}`)
            .parentElement.classList.add("active-right");
        }
        setTimeout(() => {
          target.parentElement.classList.remove("active-wrong");
          target.checked = false;
          document.querySelectorAll(".active-right").forEach((element) => {
            element.firstElementChild.checked = false;
            element.classList.remove("active-right");
          });
          this.getNextQuestion();
        }, 1500);
      }
      return find;
    }

    goodAnswerVexflowMultipleChoices() {
      this.score++;
      setTimeout(() => {
        document.querySelectorAll(".active-right").forEach((element) => {
          element.classList.remove("active-right");
          element.firstElementChild.checked = false;
        });
        this.getNextQuestion();
      }, 1500);
    }

    checkPianoUniqueChoice(target) {
      if (target.classList.contains(game.currentAnswer)) {
        game.score++;
        target.classList.add("active-right");
        setTimeout(() => {
          target.classList.remove("active-right");
        }, 1500);
      } else {
        target.classList.add("active-wrong");
        const target_right = document.querySelector(`.${game.currentAnswer}`);
        target_right.classList.add("active-right");
        setTimeout(() => {
          target.classList.remove("active-wrong");
          target_right.classList.remove("active-right");
        }, 1500);
      }
    }

    checkPianoMultipleChoices(target, round) {
      let find = false;
      for (let index = 0; index < round; index++) {
        if (target.classList.contains(game.currentAnswer[index])) {
          game.currentAnswer.splice(index, 1);
          target.classList.add("active-right");
          find = true;
        }
      }
      if (!find) {
        target.classList.add("active-wrong");
        for (let index = 0; index < round; index++) {
          document.querySelector(`.${game.currentAnswer[index]}`).classList.add("active-right");
        }
        setTimeout(() => {
          target.classList.remove("active-wrong");
          document.querySelectorAll(".active-right").forEach((element) => {
            element.classList.remove("active-right");
          });
          this.getNextQuestion();
        }, 1500);
      }
      return find;
    }

    goodAnswerPianoMultipleChoices() {
      this.score++;
      setTimeout(() => {
        document.querySelectorAll(".active-right").forEach((element) => {
          element.classList.remove("active-right");
        });
        this.getNextQuestion();
      }, 1500);
    }
  }

  class Game1 extends Game {
    constructor(data) {
      super(data);
      this.createVexButtons("row-normal", ["do", "ré", "mi", "fa", "sol", "la", "si"], "radio");
      this.createVexButtons(
        "row-diese",
        ["doD", "réD", "miD", "faD", "solD", "laD", "siD"],
        "radio"
      );
      this.createVexButtons(
        "row-bemol",
        ["doB", "réB", "miB", "faB", "solB", "laB", "siB"],
        "radio"
      );
      document.querySelector(".row-tonalites").classList.add("hidden");
      document.querySelector(".circle-game").classList.add("hidden");
    }

    checkAnswer(state, target) {
      if (state == "text") {
      } else if (state == "vexflow") {
        this.checkVexflowUniqueChoice(target);
      } else if (state == "piano") {
        this.checkPianoUniqueChoice(target);
      }
      setTimeout(() => {
        this.getNextQuestion();
      }, 1500);
    }
  }
  class Game2 extends Game {
    constructor(data) {
      super(data);
      document.querySelector(".row-normal").classList.add("hidden");
      document.querySelector(".row-diese").classList.add("hidden");
      document.querySelector(".row-bemol").classList.add("hidden");
      document.querySelector(".piano").classList.add("hidden");
      document.querySelector(".circle-game").classList.add("hidden");

      this.createVexButtons(
        "row-tonalites",
        ["0", "1B", "2B", "3B", "4B", "5B", "6B", "7B", "1D", "2D", "3D", "4D", "5D", "6D", "7D"],
        "radio"
      );
    }

    checkAnswer(state, target) {
      if (state == "text") {
      } else if (state == "vexflow") {
        this.checkVexflowUniqueChoice(target);
      }
      setTimeout(() => {
        this.getNextQuestion();
      }, 1500);
    }
  }
  class Game3 extends Game {
    constructor(data) {
      super(data);
      document.querySelector(".row-tonalites").classList.add("hidden");
      document.querySelector(".circle-game").classList.add("hidden");
      this.createVexButtons("row-normal", ["do", "ré", "mi", "fa", "sol", "la", "si"], "checkbox");
      this.createVexButtons(
        "row-diese",
        ["doD", "réD", "miD", "faD", "solD", "laD", "siD"],
        "checkbox"
      );
      this.createVexButtons(
        "row-bemol",
        ["doB", "réB", "miB", "faB", "solB", "laB", "siB"],
        "checkbox"
      );
    }
    checkAnswer(state, target) {
      if (state == "text") {
      } else if (state == "vexflow") {
        if (typeof game.currentAnswer === "string") {
          this.checkVexflowUniqueChoice(target);
          setTimeout(() => {
            this.getNextQuestion();
          }, 1500);
        } else {
          if (game.currentAnswer.length == 2) {
            this.checkVexflowMultipleChoices(target, 2);
          } else if (game.currentAnswer.length == 1) {
            if (this.checkVexflowMultipleChoices(target, 1)) {
              this.goodAnswerVexflowMultipleChoices();
            }
          }
        }
      } else if (state == "piano") {
        if (typeof game.currentAnswer === "string") {
          this.checkPianoUniqueChoice(target);
          setTimeout(() => {
            this.getNextQuestion();
          }, 1500);
        } else {
          if (game.currentAnswer.length == 2) {
            this.checkPianoMultipleChoices(target, 2);
          } else if (game.currentAnswer.length == 1) {
            if (this.checkPianoMultipleChoices(target, 1)) {
              this.goodAnswerPianoMultipleChoices();
            }
          }
        }
      }
    }
  }
  class Game4 extends Game {
    constructor(data) {
      super(data);
      this.createVexButtons("row-normal", ["do", "ré", "mi", "fa", "sol", "la", "si"], "checkbox");
      this.createVexButtons(
        "row-diese",
        ["doD", "réD", "miD", "faD", "solD", "laD", "siD"],
        "checkbox"
      );
      this.createVexButtons(
        "row-bemol",
        ["doB", "réB", "miB", "faB", "solB", "laB", "siB"],
        "checkbox"
      );
      document.querySelector(".row-tonalites").classList.add("hidden");
      document.querySelector(".piano").classList.add("hidden");
      document.querySelector(".circle-game").classList.add("hidden");
    }

    checkAnswer(state, target) {
      if (state == "text") {
      } else if (state == "vexflow") {
        if (game.currentAnswer.length == 6) {
          this.checkVexflowMultipleChoices(target, 6);
        } else if (game.currentAnswer.length == 5) {
          this.checkVexflowMultipleChoices(target, 5);
        } else if (game.currentAnswer.length == 4) {
          this.checkVexflowMultipleChoices(target, 4);
        } else if (game.currentAnswer.length == 3) {
          this.checkVexflowMultipleChoices(target, 3);
        } else if (game.currentAnswer.length == 2) {
          this.checkVexflowMultipleChoices(target, 2);
        } else if (game.currentAnswer.length == 1) {
          if (this.checkVexflowMultipleChoices(target, 1)) {
            this.goodAnswerVexflowMultipleChoices();
          }
        }
      }
    }
  }

  class Game5 extends Game {
    constructor(data) {
      super(data);
      document.querySelector(".row-normal").classList.add("hidden");
      document.querySelector(".row-diese").classList.add("hidden");
      document.querySelector(".row-bemol").classList.add("hidden");
      document.querySelector(".row-tonalites").classList.add("hidden");
      document.querySelector(".piano").classList.add("hidden");
    }

    checkAnswer(state, target) {
      if (state == "cercle") {
        let clicked = true;
        if (clicked) {
          if (
            target.classList.contains(game.currentAnswer) &&
            target.classList.contains(game.currentType)
          ) {
            game.score++;
            target.style.background = "green";
            setTimeout(() => {
              target.style.background = "";
              clicked = false;
            }, 1500);
          } else {
            target.style.background = "red";
            const target_right = document.querySelector(
              `div.circle > button.${CSS.escape(game.currentAnswer)}.${game.currentType}`
            );
            target_right.style.background = "green";
            setTimeout(() => {
              target_right.style.background = "";
              target.style.background = "";
              clicked = false;
            }, 1500);
          }
        }
      }
      setTimeout(() => {
        this.getNextQuestion();
      }, 1500);
    }
  }

  /**
   * Joue une note de musique si l'evenement du clavier associé correspond à une touche du piano
   * et vérifie si c'est la bonne réponse à la question posée
   * @param {event} e
   * @returns {undefined|void}
   */
  function playSoundFromKeyboard(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`polygon[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    game.checkAnswer("piano", key);
  }

  /**
   * Joue une note de musique si l'evenement de la souris associé correspond à une touche du piano
   * et vérifie si c'est la bonne réponse à la question posée
   * @param {event} e
   * @returns {undefined|void}
   */
  function playSoundFromClick(e) {
    const keyCode = e.target.getAttribute("data-key");
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    game.checkAnswer("piano", e.target);
  }

  window.addEventListener("keydown", playSoundFromKeyboard);

  document.querySelectorAll("polygon").forEach((key) => {
    key.addEventListener("click", playSoundFromClick);
  });

  // gestion des evenements des boutons sur le cercle de quinte
  document.querySelectorAll(".circle button").forEach((button) =>
    button.addEventListener("click", function () {
      game.checkAnswer("cercle", this);
    })
  );

  game = new Game5(process_jeu_5);
  game.start();

  // gestion des evenements des radio buttons
  document.querySelectorAll("input").forEach((button) =>
    button.addEventListener("click", function () {
      game.checkAnswer("vexflow", this);
    })
  );
});
