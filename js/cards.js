var beenAppended = false;

function addProjectDropdown() {
  $("#pCard1").prepend(
    `<form class="form-inline mt-2 mt-md-0 text-center">
<div class="dropdown text-center">
  <button
    class="btn btn-primary dropdown-toggle"
    type="button"
    data-toggle="dropdown"
    id="d1"
  >
    Projects <span class="caret"></span>
  </button>
  <ul class="dropdown-menu">
    <input
      class="form-control"
      id="myInput"
      type="text"
      placeholder="Search.."
    /> 
    <li><a id="L1" href="#">LACEcalc</a></li>
    <li><a id="L2" href="#">AWS Polly</a></li>
         
    
    <!-- Only use what you have cards for
             <li><a href="https://github.com/josephedward/L.I.R.I.">L.I.R.I</a></li>
          <li><a href="https://josephvesley.github.io/rock-paper-scissors/">Rock-Paper-Scissors</a></li>
          <li><a href="https://josephedward.github.io/machine_learning_extra_basic/">machine_learning_extra_basic</a></li>
          <li><a href="https://josephedward.github.io/group-project-1/">bridgecontrol</a></li>
          <li><a href="https://josephedward.github.io/thomas-the-train-scheduler/">thomas-the-train-scheduler</a></li>
          <li><a href="https://josephedward.github.io/mad-libs-gifs/">mad-libs-gifs</a></li>
          <li><a href="https://josephedward.github.io/gif_tasty/">gif_tasty</a></li>
          <li><a href="https://josephedward.github.io/trivia-game-advanced/">trivia-game-advanced</a></li>
          <li><a href="https://josephedward.github.io/trivia-game-simple/">trivia-game-simple</a></li>
          <li><a href="https://josephedward.github.io/star-wars-rpg/">star-wars-rpg</a></li>
          <li><a href="https://josephedward.github.io/crystal-collector/">crystal-collector</a></li>
          <li><a href="https://josephedward.github.io/word-guess-game/">word-guess-game</a></li>
          <li><a href="https://josephedward.github.io/psychic-game/">psychic-game</a></li>
          <li><a href="https://github.com/josephedward/responsive-portfolio">portfolio-with-media-queries</a></li>
          <li><a href="https://github.com/josephedward/bootstrap-portfolio">Example-Bootstrap-portfolio</a></li>
          <li><a href="https://github.com/josephedward/Wireframe">Wireframe</a></li>
          <li><a href="https://github.com/josephedward/BOOSTcalc">BOOSTcalc</a></li>
          <li><a href="https://github.com/josephedward/LACEcalc">LACEcalc</a></li>
          <li><a href="https://vaaacares.com/">VAAACares</a></li>  -->
    <!-- <li><a href="polly_ex.html">AWS Polly</a></li>  -->
    <!-- pointless to link to until you have the right s3 URL - grab it from AWS -->
  </ul>
</div>
</form>`
  );
}

function bindClickEvents() {
  $("#L1").on("click", function(e) {
    cardAppended();
    beenAppended = true;
    $("#pCard1").append(
      
      `
      <div class="cardWrap">
      <h5 class="card-title">L.A.C.E. Calculator</h5>
        <img
          class="card-img-top"
          src="./images/lace.JPG"
          alt="Card image cap"
        />
        <div class="card-body">
          <p class="card-text">
            Java Swing app I built while interning at BayAging. Calculates
            Length-Acuity-Comorbidity-Emergency (LACE) Score for hospital
            readmission probability assessments.
          </p>
          <a href="https://github.com/josephedward/LACEcalc" class="btn btn-primary">Github</a>
          <ul class="rList">
              <b>Resources:</b>
          <li><a href="https://www.allscripts.com/news-insights/blog/blog/2016/04/using-lace-as-a-tool-to-avoid-unnecessary-hospital-readmissions">allscripts</a></li>
          <li><a href="https://www.besler.com/lace-risk-score/">besler</a></li>
          <li><a href="https://micmrc.org/system/files/LACE_tool%204.23.13.pdf">micmrc</a></li>
        </ul>
        </div>
        </div>
        `
    );
  });

  $("#L2").on("click", function() {
    cardAppended();
    beenAppended = true;
    // $("#pCard1").clear();
    $("#pCard1").append(

      `
      <div class="cardWrap">
      <h5 class="card-title">AWS Polly</h5>
      <img
        class="card-img-top"
        src="./images/polly.JPG"
        alt="Card image cap"
      />
      <div class="card-body">
        <p class="card-text">
          Example app I built while studying for AWS Cloud Practioner with
          the assistance of 'A Cloud Guru'. Utilizes AWS Polly, Lambda, S3,
          APIGateway, DynamoDB, SNS.
        </p>
        <a
          href="https://s3.amazonaws.com/joevesley.com/old/polly_ex.html"
          class="btn btn-primary"
          >Github</a
        >
        <ul class="rList">
          <b>Resources:</b>
          <li>
              <a
                href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=4&cad=rja&uact=8&ved=2ahUKEwjl8q3WpPjhAhWm1lkKHfMZCecQFjADegQIBRAB&url=https%3A%2F%2Faws.amazon.com%2Fpolly%2F&usg=AOvVaw2bHNQNdHyFI9hgMzK1omsj"
                >Amazon</a
              >
            </li>
          <li>
            <a
              href="https://docs.aws.amazon.com/polly/latest/dg/what-is.html"
              >AWS Docs</a
            >
          </li>

          <li>
            <a
              href="https://acloud.guru/series/acg-projects"
              >A Cloud Guru Projects</a
            >
          </li>
        </ul>
      </div>
      </div>
        `
    );
  });









  $("#L3").on("click", function() {
    cardAppended();
    beenAppended = true;
    // $("#pCard1").clear();
    $("#pCard1").append(

      `
      <div class="cardWrap">
      <h5 class="card-title">B.O.O.S.T. Calculator</h5>
      <img
        class="card-img-top"
        src="./images/boost.JPG"
        alt="Card image cap"
      />
      <div class="card-body">
        <p class="card-text">
        Java Swing app I built while interning at BayAging. 
        Utilizes BOOST (Better Outcomes by Optimizing Safe Transitions) 
        care transitions score to calculate hospital readmission probability. 
        </p>
        <a
          href="https://github.com/josephedward/BOOSTcalc"
          class="btn btn-primary"
          >Github</a
        >
        <ul class="rList">
          <b>Resources:</b>
          <li>
              <a
                href="https://www.journalofhospitalmedicine.com/jhospmed/article/127035/project-boost"
                >Journal of Hospital Medicine</a
              >
            </li>
          <li>
            <a
              href="http://www.hret-hiin.org/resources/display/project-boost-implementation-toolkit"
              >Health Education & Research Trust</a
            >
          </li>

          <li>
            <a
              href="https://www.hospitalmedicine.org/clinical-topics/care-transitions/"
              >Society for Hospital Medicine</a
            >
          </li>
        </ul>
      </div>
      
      </div>
      
      `
    );
  });
}

function cardAppended() {
  if (beenAppended === true) {
    console.log("got here");
    $("#pCard1 .cardWrap").remove().last(); //may need to wrap whole card 
    //and remove with the class name?
    //may need further identifiers in jquery 
    //  .remove($("pCard1").last());
  }
}
