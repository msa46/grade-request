(function () {
  var TO = "remzi.celebi@maastrichtuniversity.nl";

  var DRAFTS = [
    {
      subject: "Grade details for Semantic Web",
      body:
        "Dear Professor Celebi,\n\n" +
        "I hope you're doing well. I'm a student in your Semantic Web course and I'd like to ask about my grade details. " +
        "Could you let me know how my result was put together, if that's possible?\n\n" +
        "Thank you for your time."
    },
    {
      subject: "Question about my Semantic Web grade",
      body:
        "Dear Mr. Celebi,\n\n" +
        "I'm following Semantic Web this term and I was wondering whether I could get a breakdown of my grade. " +
        "I'd like to understand how the different parts counted toward the final result.\n\n" +
        "Thanks in advance for your help."
    },
    {
      subject: "Request for grade details – Semantic Web",
      body:
        "Dear Professor Celebi,\n\n" +
        "I'm writing to ask if I could receive the details of my grade for Semantic Web. " +
        "If there's a good time to come by and go through it, I'm happy to do that instead.\n\n" +
        "Thank you very much."
    },
    {
      subject: "Semantic Web – my grade details",
      body:
        "Dear Mr. Celebi,\n\n" +
        "Could you send me the details of my grade for the Semantic Web course? " +
        "Any feedback you can share on my work would also be appreciated.\n\n" +
        "Kind thanks for your time."
    },
    {
      subject: "Asking about my Semantic Web results",
      body:
        "Dear Professor Celebi,\n\n" +
        "I hope your week is going well. I'd like to ask for the details of my grade in Semantic Web, " +
        "including the scores for the separate components if you have them. It would help me see where I stand.\n\n" +
        "Thank you, and I appreciate your help."
    }
  ];

  var last = -1;

  function pickDraft() {
    var i;
    do { i = Math.floor(Math.random() * DRAFTS.length); } while (i === last && DRAFTS.length > 1);
    last = i;
    var name = document.getElementById("name").value.trim();
    return {
      subject: DRAFTS[i].subject,
      body: DRAFTS[i].body + "\n\nBest regards,\n" + name
    };
  }

  // Query string with %20 (not +) for spaces and CRLF line breaks; mail clients expect this.
  function query(d) {
    return "subject=" + encodeURIComponent(d.subject) +
           "&body=" + encodeURIComponent(d.body.replace(/\n/g, "\r\n"));
  }

  function open(url) { window.location.href = url; }

  document.getElementById("send").addEventListener("click", function () {
    open("mailto:" + TO + "?" + query(pickDraft()));
  });

  document.getElementById("web").addEventListener("click", function () {
    var d = pickDraft();
    var url = "https://outlook.office.com/mail/deeplink/compose?to=" + encodeURIComponent(TO) + "&" + query(d);
    window.open(url, "_blank", "noopener");
  });

  document.getElementById("app").addEventListener("click", function () {
    open("ms-outlook://compose?to=" + encodeURIComponent(TO) + "&" + query(pickDraft()));
  });
})();
