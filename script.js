let game = null;
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".jeu-1").classList.add("hidden");
  document.querySelector(".jeu-2").classList.add("hidden");
  document.querySelector(".jeu-3").classList.add("hidden");
  document.querySelector(".jeu-4").classList.add("hidden");
  document.querySelector(".jeu-5").classList.add("hidden");
  document.querySelector(".container-piano").classList.remove("hidden");
  document.querySelector("#connaissances").classList.add("hidden");

  VF = Vex.Flow;

  const normal = document.querySelector(".row-normal");
  const diese = document.querySelector(".row-diese");
  const bemol = document.querySelector(".row-bemol");
  const tonalites_major = document.querySelector(".row-tonalites.major");

  const vexflows_normal = normal.querySelectorAll("[class^=column-]");
  const vexflows_diese = diese.querySelectorAll("[class^=column-]");
  const vexflows_bemol = bemol.querySelectorAll("[class^=column-]");
  const vexflows_tonalite_major = tonalites_major.querySelectorAll("[class^=column-]");

  const notes_normal = [
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
  ];

  const notes_diese = [
    new VF.StaveNote({ clef: "treble", keys: ["c/4"], duration: "q" })
      .addAccidental(0, new VF.Accidental("#"))
      .addModifier(
        0,
        new VF.Annotation("do\u266F")
          .setVerticalJustification(VF.Annotation.VerticalJustify.TOP)
          .setFont("Arial", "11")
      ),

    new VF.StaveNote({ clef: "treble", keys: ["d/4"], duration: "q" })
      .addAccidental(0, new VF.Accidental("#"))
      .addModifier(
        0,
        new VF.Annotation("ré\u266F")
          .setVerticalJustification(VF.Annotation.VerticalJustify.TOP)
          .setFont("Arial", "11")
      ),

    new VF.StaveNote({ clef: "treble", keys: ["e/4"], duration: "q" })
      .addAccidental(0, new VF.Accidental("#"))
      .addModifier(
        0,
        new VF.Annotation("mi\u266F")
          .setVerticalJustification(VF.Annotation.VerticalJustify.TOP)
          .setFont("Arial", "11")
      ),

    new VF.StaveNote({ clef: "treble", keys: ["f/4"], duration: "q" })
      .addAccidental(0, new VF.Accidental("#"))
      .addModifier(
        0,
        new VF.Annotation("fa\u266F")
          .setVerticalJustification(VF.Annotation.VerticalJustify.TOP)
          .setFont("Arial", "11")
      ),

    new VF.StaveNote({ clef: "treble", keys: ["g/4"], duration: "q" })
      .addAccidental(0, new VF.Accidental("#"))
      .addModifier(
        0,
        new VF.Annotation("sol\u266F")
          .setVerticalJustification(VF.Annotation.VerticalJustify.TOP)
          .setFont("Arial", "11")
      ),

    new VF.StaveNote({ clef: "treble", keys: ["a/4"], duration: "q" })
      .addAccidental(0, new VF.Accidental("#"))
      .addModifier(
        0,
        new VF.Annotation("la\u266F")
          .setVerticalJustification(VF.Annotation.VerticalJustify.TOP)
          .setFont("Arial", "11")
      ),

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
  ];

  const notes_bemol = [
    new VF.StaveNote({ clef: "treble", keys: ["c/4"], duration: "q" })
      .addAccidental(0, new VF.Accidental("b"))
      .addModifier(
        0,
        new VF.Annotation("do\u266D")
          .setVerticalJustification(VF.Annotation.VerticalJustify.TOP)
          .setFont("Arial", "11")
      ),

    new VF.StaveNote({ clef: "treble", keys: ["d/4"], duration: "q" })
      .addAccidental(0, new VF.Accidental("b"))
      .addModifier(
        0,
        new VF.Annotation("ré\u266D")
          .setVerticalJustification(VF.Annotation.VerticalJustify.TOP)
          .setFont("Arial", "11")
      ),

    new VF.StaveNote({ clef: "treble", keys: ["e/4"], duration: "q" })
      .addAccidental(0, new VF.Accidental("b"))
      .addModifier(
        0,
        new VF.Annotation("mi\u266D")
          .setVerticalJustification(VF.Annotation.VerticalJustify.TOP)
          .setFont("Arial", "11")
      ),

    new VF.StaveNote({ clef: "treble", keys: ["f/4"], duration: "q" })
      .addAccidental(0, new VF.Accidental("b"))
      .addModifier(
        0,
        new VF.Annotation("fa\u266D")
          .setVerticalJustification(VF.Annotation.VerticalJustify.TOP)
          .setFont("Arial", "11")
      ),

    new VF.StaveNote({ clef: "treble", keys: ["g/4"], duration: "q" })
      .addAccidental(0, new VF.Accidental("b"))
      .addModifier(
        0,
        new VF.Annotation("sol\u266D")
          .setVerticalJustification(VF.Annotation.VerticalJustify.TOP)
          .setFont("Arial", "11")
      ),

    new VF.StaveNote({ clef: "treble", keys: ["a/4"], duration: "q" })
      .addAccidental(0, new VF.Accidental("b"))
      .addModifier(
        0,
        new VF.Annotation("la\u266D")
          .setVerticalJustification(VF.Annotation.VerticalJustify.TOP)
          .setFont("Arial", "11")
      ),

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

  vexflows_normal.forEach(createVexflow, notes_normal);
  vexflows_diese.forEach(createVexflow, notes_diese);
  vexflows_bemol.forEach(createVexflow, notes_bemol);
  vexflows_tonalite_major.forEach(createVexflowSignature, majorKeys);

  function createVexflow(item, index) {
    // Create an SVG renderer and attach it to the DIV element named "column-".
    var div = item;
    var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

    // Configure the rendering context.
    renderer.resize(100, 100);
    var context = renderer.getContext();
    context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

    // Create a stave of width 100 at position 0, 0 on the canvas
    var stave = new VF.Stave(0, 0, 100);
    stave.addClef("treble");

    // Connect it to the rendering context and draw!
    stave.setContext(context).draw();

    var note = [this[index]];

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
      question: document.querySelector(".jeu-2 .question-answer-7b.question-majeur .question")
        .innerHTML,
      type: "majeur",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[1]
        .childNodes[0].data,
    },
    {
      question: document.querySelector(".jeu-2 .question-answer-7b.question-mineur .question")
        .innerHTML,
      type: "mineur",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[1]
        .childNodes[0].data,
    },

    {
      question: document.querySelector(".jeu-2 .question-answer-6b.question-majeur .question")
        .innerHTML,
      type: "majeur",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[2]
        .childNodes[0].data,
    },
    {
      question: document.querySelector(".jeu-2 .question-answer-6b.question-mineur .question")
        .innerHTML,
      type: "mineur",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[2]
        .childNodes[0].data,
    },

    {
      question: document.querySelector(".jeu-2 .question-answer-5b.question-majeur .question")
        .innerHTML,
      type: "majeur",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[3]
        .childNodes[0].data,
    },
    {
      question: document.querySelector(".jeu-2 .question-answer-5b.question-mineur .question")
        .innerHTML,
      type: "mineur",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[3]
        .childNodes[0].data,
    },

    {
      question: document.querySelector(".jeu-2 .question-answer-4b.question-majeur .question")
        .innerHTML,
      type: "majeur",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[4]
        .childNodes[0].data,
    },
    {
      question: document.querySelector(".jeu-2 .question-answer-4b.question-mineur .question")
        .innerHTML,
      type: "mineur",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[4]
        .childNodes[0].data,
    },

    {
      question: document.querySelector(".jeu-2 .question-answer-3b.question-majeur .question")
        .innerHTML,
      type: "majeur",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[5]
        .childNodes[0].data,
    },
    {
      question: document.querySelector(".jeu-2 .question-answer-3b.question-mineur .question")
        .innerHTML,
      type: "mineur",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[5]
        .childNodes[0].data,
    },

    {
      question: document.querySelector(".jeu-2 .question-answer-2b.question-majeur .question")
        .innerHTML,
      type: "majeur",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[6]
        .childNodes[0].data,
    },
    {
      question: document.querySelector(".jeu-2 .question-answer-2b.question-mineur .question")
        .innerHTML,
      type: "mineur",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[6]
        .childNodes[0].data,
    },

    {
      question: document.querySelector(".jeu-2 .question-answer-1b.question-majeur .question")
        .innerHTML,
      type: "majeur",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[7]
        .childNodes[0].data,
    },
    {
      question: document.querySelector(".jeu-2 .question-answer-1b.question-mineur .question")
        .innerHTML,
      type: "mineur",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[7]
        .childNodes[0].data,
    },

    {
      question: document.querySelector(".jeu-2 .question-answer-0.question-majeur .question")
        .innerHTML,
      type: "majeur",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[8]
        .childNodes[0].data,
    },
    {
      question: document.querySelector(".jeu-2 .question-answer-0.question-mineur .question")
        .innerHTML,
      type: "mineur",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[8]
        .childNodes[0].data,
    },

    {
      question: document.querySelector(".jeu-2 .question-answer-1d.question-majeur .question")
        .innerHTML,
      type: "majeur",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[9]
        .childNodes[0].data,
    },
    {
      question: document.querySelector(".jeu-2 .question-answer-1d.question-mineur .question")
        .innerHTML,
      type: "mineur",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[9]
        .childNodes[0].data,
    },

    {
      question: document.querySelector(".jeu-2 .question-answer-2d.question-majeur .question")
        .innerHTML,
      type: "majeur",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[10]
        .childNodes[0].data,
    },
    {
      question: document.querySelector(".jeu-2 .question-answer-2d.question-mineur .question")
        .innerHTML,
      type: "mineur",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[10]
        .childNodes[0].data,
    },

    {
      question: document.querySelector(".jeu-2 .question-answer-3d.question-majeur .question")
        .innerHTML,
      type: "majeur",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[11]
        .childNodes[0].data,
    },
    {
      question: document.querySelector(".jeu-2 .question-answer-3d.question-mineur .question")
        .innerHTML,
      type: "mineur",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[11]
        .childNodes[0].data,
    },

    {
      question: document.querySelector(".jeu-2 .question-answer-4d.question-majeur .question")
        .innerHTML,
      type: "majeur",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[12]
        .childNodes[0].data,
    },
    {
      question: document.querySelector(".jeu-2 .question-answer-4d.question-mineur .question")
        .innerHTML,
      type: "mineur",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[12]
        .childNodes[0].data,
    },

    {
      question: document.querySelector(".jeu-2 .question-answer-5d.question-majeur .question")
        .innerHTML,
      type: "majeur",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[13]
        .childNodes[0].data,
    },
    {
      question: document.querySelector(".jeu-2 .question-answer-5d.question-mineur .question")
        .innerHTML,
      type: "mineur",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[13]
        .childNodes[0].data,
    },

    {
      question: document.querySelector(".jeu-2 .question-answer-6d.question-majeur .question")
        .innerHTML,
      type: "majeur",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[14]
        .childNodes[0].data,
    },
    {
      question: document.querySelector(".jeu-2 .question-answer-6d.question-mineur .question")
        .innerHTML,
      type: "mineur",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[14]
        .childNodes[0].data,
    },

    {
      question: document.querySelector(".jeu-2 .question-answer-7d.question-majeur .question")
        .innerHTML,
      type: "majeur",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[15]
        .childNodes[0].data,
    },
    {
      question: document.querySelector(".jeu-2 .question-answer-7d.question-mineur .question")
        .innerHTML,
      type: "mineur",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[15]
        .childNodes[0].data,
    },
  ];

  const process_jeu_3 = [
    {
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
      question: document.querySelector(".jeu-5 .question-answer-7b .question").innerHTML,
      type: "global",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[1]
        .childNodes[0].data,
    },
    {
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
      question: document.querySelector(".jeu-5 .question-answer-6b .question").innerHTML,
      type: "global",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[2]
        .childNodes[0].data,
    },
    {
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
      question: document.querySelector(".jeu-5 .question-answer-5b .question").innerHTML,
      type: "global",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[3]
        .childNodes[0].data,
    },
    {
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
      question: document.querySelector(".jeu-5 .question-answer-4b .question").innerHTML,
      type: "global",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[4]
        .childNodes[0].data,
    },
    {
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
      question: document.querySelector(".jeu-5 .question-answer-3b .question").innerHTML,
      type: "global",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[5]
        .childNodes[0].data,
    },
    {
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
      question: document.querySelector(".jeu-5 .question-answer-2b .question").innerHTML,
      type: "global",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[6]
        .childNodes[0].data,
    },
    {
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
      question: document.querySelector(".jeu-5 .question-answer-1b .question").innerHTML,
      type: "global",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[7]
        .childNodes[0].data,
    },
    {
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
      question: document.querySelector(".jeu-5 .question-answer-0 .question").innerHTML,
      type: "global",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[8]
        .childNodes[0].data,
    },
    {
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
      question: document.querySelector(".jeu-5 .question-answer-1d .question").innerHTML,
      type: "global",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[9]
        .childNodes[0].data,
    },
    {
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
      question: document.querySelector(".jeu-5 .question-answer-2d .question").innerHTML,
      type: "global",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[10]
        .childNodes[0].data,
    },
    {
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
      question: document.querySelector(".jeu-5 .question-answer-3d .question").innerHTML,
      type: "global",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[11]
        .childNodes[0].data,
    },
    {
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
      question: document.querySelector(".jeu-5 .question-answer-4d .question").innerHTML,
      type: "global",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[12]
        .childNodes[0].data,
    },
    {
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
      question: document.querySelector(".jeu-5 .question-answer-5d .question").innerHTML,
      type: "global",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[13]
        .childNodes[0].data,
    },
    {
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
      question: document.querySelector(".jeu-5 .question-answer-6d .question").innerHTML,
      type: "global",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[14]
        .childNodes[0].data,
    },
    {
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
      question: document.querySelector(".jeu-5 .question-answer-7d .question").innerHTML,
      type: "global",
      validator: document.querySelector("#connaissances").getElementsByTagName("th")[15]
        .childNodes[0].data,
    },
    {
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

  function arrayCompare(_arr1, _arr2) {
    if (!Array.isArray(_arr1) || !Array.isArray(_arr2) || _arr1.length !== _arr2.length) {
      return false;
    }

    // .concat() to not mutate arguments
    const arr1 = _arr1.concat().sort();
    const arr2 = _arr2.concat().sort();

    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }

  function hide(classe) {
    const element = document.querySelector(`.${classe}`);
    if (element.classList.contains("hidden")) {
      return;
    } else {
      element.classList.add("hidden");
    }
  }

  function display(classe) {
    const element = document.querySelector(`.${classe}`);
    if (element.classList.contains("hidden")) {
      element.classList.remove("hidden");
    } else {
      return;
    }
  }

  class Game {
    constructor(data) {
      this.score = 0;
      score.innerText = "Score :" + this.score;
      this.currentQuestion = null;
      this.currentType = null;
      this.currentAnswer = null;
      this.timeLeft = 60;
      this.timer = null;
      this.data = data;
      this.answerTimer = 0;
      this.answerDisplayTime = 4;
    }

    noteTranslationDict = {
      B: "♭",
      D: "♯",
    };

    getNextQuestion() {
      const random = Math.floor(Math.random() * this.data.length);
      this.currentQuestion = this.data[random].question;
      this.currentType = this.data[random].type;
      this.currentAnswer = this.data[random].validator;
      this.data.splice(random, 1);
      console.log(this.currentQuestion);
      console.log(this.currentAnswer);
      textQuestion.innerText = this.currentQuestion + "\n";
    }

    start() {
      this.getNextQuestion();
      this.updateTimer();
      this.timer = setInterval(this.updateTimer.bind(this), 1000);
    }

    updateTimer() {
      if (this.timeLeft <= 0) {
        this.gameOver();
      } else {
        this.timeLeft = this.timeLeft - 1;
        if (this.answerTimer != 0) {
          this.answerTimer = this.answerTimer - 1;
          if (this.answerTimer == 0) {
            textAnswer.innerText = "";
          }
        }
        clock.innerText = "Time : " + this.timeLeft;
      }
    }

    increaseScore() {
      this.score += 1;
      score.innerText = "Score :" + this.score;
    }

    gameOver() {
      console.log("GAME OVER");
      /*       document.querySelector(".piano").classList.add("hidden");
      window.removeEventListener("keydown", playSound); */
      clearInterval(this.timer);
      score.innerText = "Game Over!, votre score est : " + this.score;
      clock.innerText = "";
      this.timer = null;
      textAnswer.innerText = "";
      textQuestion.innerText = "";
      game = null;
    }

    createVexButtons(classe, values, type) {
      if (
        document.querySelector(`.${classe}`).firstElementChild.firstElementChild.tagName == "INPUT"
      ) {
        return;
      } else {
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
    }

    validateAnswer(isValid) {
      if (isValid) {
        textAnswer.innerText = "Bonne réponse \n";
        this.increaseScore();
      } else textAnswer.innerText = "Mauvais reponse, la bonne reponse est :" + this.answerTextFormatted() + "\n";
    }

    answerTextFormatted() {
      var answer = this.currentAnswer;
      if (typeof answer == "string") {
        for (var key in this.noteTranslationDict) {
          answer = answer.replace(key, this.noteTranslationDict[key]);
        }
        return answer;
      } else {
        var str = "";
        for (var value in answer) {
          var temp = answer[value];
          for (var key in this.noteTranslationDict) {
            temp = temp.replace(key, this.noteTranslationDict[key]);
          }
          str += temp + ",";
        }
        return str.slice(0, -1);
      }
    }

    checkVexflowUniqueChoice(target) {
      if (target.id == game.currentAnswer) {
        this.increaseScore();
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
      this.increaseScore();
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
        this.increaseScore();
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
      this.increaseScore();
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
      display("input-game");
      display("container-piano");
      display("row-normal");
      display("row-diese");
      display("row-bemol");
      hide("row-tonalites");
      hide("circle-game");
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
    }

    checkAnswer(state, target) {
      if (state == "text") {
        var answerIn = textIn.value;
        this.validateAnswer(answerIn == this.currentAnswer);
        this.answerTimer = this.answerDisplayTime;
        this.getNextQuestion();
      } else if (state == "vexflow") {
        this.checkVexflowUniqueChoice(target);
        setTimeout(() => {
          this.getNextQuestion();
        }, 1500);
      } else if (state == "piano") {
        this.checkPianoUniqueChoice(target);
        setTimeout(() => {
          this.getNextQuestion();
        }, 1500);
      }
    }
  }
  class Game2 extends Game {
    constructor(data) {
      super(data);
      display("input-game");
      hide("container-piano");
      hide("row-normal");
      hide("row-diese");
      hide("row-bemol");
      display("row-tonalites");
      hide("circle-game");

      this.createVexButtons(
        "row-tonalites",
        ["0", "1B", "2B", "3B", "4B", "5B", "6B", "7B", "1D", "2D", "3D", "4D", "5D", "6D", "7D"],
        "radio"
      );
    }

    checkAnswer(state, target) {
      if (state == "text") {
        var answerIn = textIn.value;
        this.validateAnswer(answerIn == this.currentAnswer);
        this.answerTimer = this.answerDisplayTime;
        this.getNextQuestion();
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
      display("input-game");
      display("container-piano");
      display("row-normal");
      display("row-diese");
      display("row-bemol");
      hide("row-tonalites");
      hide("circle-game");
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

    getNextQuestion() {
      super.getNextQuestion();
      if (this.currentType == "global") {
        document.querySelectorAll("div[class^='column-']").forEach((element) => {
          element.firstElementChild.type = "checkbox";
        });
      } else {
        document.querySelectorAll("div[class^='column-']").forEach((element) => {
          element.firstElementChild.type = "radio";
        });
      }
    }

    checkAnswer(state, target) {
      if (state == "text") {
        var answerIn = textIn.value.split(",");
        if (typeof this.currentAnswer == "string") var answerCheck = answerIn == this.currentAnswer;
        else {
          var answerCheck = arrayCompare(answerIn, this.currentAnswer);
        }
        this.validateAnswer(answerCheck);
        this.answerTimer = this.answerDisplayTime;
        this.getNextQuestion();
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
      display("input-game");
      hide("container-piano");
      display("row-normal");
      display("row-diese");
      display("row-bemol");
      hide("row-tonalites");
      hide("circle-game");
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
        var answerIn = textIn.value.split(",");
        var answerCheck = arrayCompare(answerIn, this.currentAnswer);
        this.validateAnswer(answerCheck);
        this.answerTimer = this.answerDisplayTime;
        this.getNextQuestion();
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
      hide("input-game");
      hide("container-piano");
      hide("row-normal");
      hide("row-diese");
      hide("row-bemol");
      hide("row-tonalites");
      display("circle-game");
    }

    checkAnswer(state, target) {
      if (state == "cercle") {
        let clicked = true;
        if (clicked) {
          if (
            target.classList.contains(game.currentAnswer) &&
            target.classList.contains(game.currentType)
          ) {
            this.increaseScore();
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

  function selectGame(gameId) {
    if (game && game.timer) {
      clearInterval(game.timer);
    }
    switch (gameId) {
      case 0:
        game = new Game1(process_jeu_1);
        break;
      case 1:
        game = new Game2(process_jeu_2);
        break;
      case 2:
        game = new Game3(process_jeu_3);
        break;
      case 3:
        game = new Game4(process_jeu_4);
        break;
      case 4:
        game = new Game5(process_jeu_5);
        break;
    }
    game.start();

    // gestion des evenements des radio ou checkbox bouttons
    document.querySelectorAll("div[class^='column-'] > input").forEach((button) =>
      button.addEventListener("click", function () {
        game.checkAnswer("vexflow", this);
      })
    );
  }

  score = document.getElementById("score");
  clock = document.getElementById("timer");
  textIn = document.getElementById("input-textbox");
  textQuestion = document.getElementById("output-textbox-question");
  textAnswer = document.getElementById("output-textbox-answer");

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

  // gestion des evenements des touches du clavier

  const addSoundFromKey = function (e) {
    if (game) {
      playSoundFromKeyboard(e);
    }
  };

  window.document.addEventListener("keydown", function (e) {
    if (game)
      if (document.querySelector("#input-textbox") == document.activeElement) {
        return;
      } else {
        addSoundFromKey(e);
      }
  });

  const removeSoundFromKey = function (e) {
    if (game) {
      window.document.removeEventListener("keydown", addSoundFromKey);
    }
  };

  document.querySelector("#input-textbox").addEventListener("click", removeSoundFromKey);
  document.querySelector("#btn-answer").addEventListener("click", function (e) {
    if (game) game.checkAnswer("text");
  });

  // gestions des evenements des clics sur le piano
  document.querySelectorAll("polygon").forEach((key) => {
    key.addEventListener("click", function (e) {
      if (game) playSoundFromClick(e);
    });
  });

  // gestion des evenements des boutons sur le cercle de quinte
  document.querySelectorAll(".circle button").forEach((button) =>
    button.addEventListener("click", function () {
      if (game) game.checkAnswer("cercle", this);
    })
  );

  document.querySelectorAll(".gameSelector").forEach((button, i) => {
    button.addEventListener("click", function () {
      selectGame(i);
    });
  });
});
