function check(){
    var float=0;
    var question1=document.quiz.question1.value;
    var question2=document.quiz.question2.value;
    var question3=document.quiz.question3.value;
    var question4=document.quiz.question4.value;

    if (question1=="float") {float++};
    if (question2=="color") {float++}
    if (question3=="script") {float++}
    if (question4=="False") {float++}
    document.write(float);
    }