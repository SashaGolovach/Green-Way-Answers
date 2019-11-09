for (var i = 0; i < 20; i++) {
    let el = document.getElementsByClassName('answers')[0];
    let answers = el.getElementsByTagName('li');
    var correctAnswerId = 0;
    for (var j = 0; j < answers.length; j++) {
        var aid = answers[j].id.split('a');
        var qid = aid[0].split('q')[1];
        var qa = ((ra[qid] - 3) / 7) + 1 - qid;
        if (qa == aid[1]) {
            correctAnswerId = j;
            break;
        }
    }
    answers[correctAnswerId].click();
}