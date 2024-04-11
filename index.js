document.getElementById("toggleButton").addEventListener("change", function () {
  let designerTitle = document.getElementById("designerTitle");
  if (this.checked) {
    designerTitle.style.color = "var(--White, #FFF)";
  } else {
    designerTitle.style.transition = "color 0.5s ease";
    designerTitle.style.color = "#292929";
  }
});

document.getElementById("toggleButton").addEventListener("change", function () {
  let portalPath = document.querySelector("#portalSvg path");
  if (this.checked) {
    portalPath.setAttribute("fill", "#fff");
  } else {
    portalPath.setAttribute("fill", "#292929");
  }
});

document.getElementById("toggleButton").addEventListener("change", function () {
  let buttonContact = document.getElementById("buttonContact");
  if (this.checked) {
    buttonContact.style.background = "#925FF0";
  } else {
    buttonContact.style.background = "#292929";
  }
});

document.getElementById("toggleButton").addEventListener("change", function () {
  // 1. заменить на класс. Айди - уникальный атрибут.
  let headerLinks = document.querySelectorAll("#headerLink");
  for (let i = 0; i < headerLinks.length; i++) {
    if (this.checked) {
      headerLinks[i].style.color = "#fff";
    } else {
      headerLinks[i].style.transition = "color 0.5s ease";
      headerLinks[i].style.color = "#292929";
    }
  }
});

document.getElementById("toggleButton").addEventListener("change", function () {
  let logoSvg = document.querySelectorAll(".logoSvg");
  for (let i = 0; i < logoSvg.length; i++) {
    if (this.checked) {
      logoSvg[i].style.fill = "#fff";
    } else {
      logoSvg[i].style.fill = "#292929";
    }
  }
});

document.getElementById("toggleButton").addEventListener("change", function () {
  let socialImg = document.querySelectorAll(".socialImg");
  for (let i = 0; i < socialImg.length; i++) {
    if (this.checked) {
      socialImg[i].style.fill = "#fff";
    } else {
      socialImg[i].style.fill = "#292929";
    }
  }
});

let originalBodyColor;
document.getElementById("toggleButton").addEventListener("change", function () {
  let bodyElement = document.body;
  if (!originalBodyColor) {
    originalBodyColor = getComputedStyle(bodyElement).backgroundColor;
  }
  if (this.checked) {
    bodyElement.style.backgroundColor = "#000000";
  } else {
    bodyElement.style.backgroundColor = "#fff";
  }
});

document.getElementById("toggleButton").addEventListener("change", function () {
  let ratesBox = document.querySelector(".block-rates-box");
  if (this.checked) {
    ratesBox.style.background = "#0B0B0B";
  } else {
    ratesBox.style.background = "#F6FFF6";
  }
});

document.getElementById("toggleButton").addEventListener("change", function () {
  let ratesTitle = document.querySelectorAll(".block-rates-title");
  for (let i = 0; i < ratesTitle.length; i++) {
    if (this.checked) {
      ratesTitle[i].style.color = "#C8FEC7";
    } else {
      ratesTitle[i].style.transition = "color 0.5s ease";
      ratesTitle[i].style.color = "#64C661";
    }
  }
});

document.getElementById("toggleButton").addEventListener("change", function () {
  let ratesDescription = document.querySelectorAll(".block-rates-description");
  for (let i = 0; i < ratesDescription.length; i++) {
    if (this.checked) {
      ratesDescription[i].style.color = "#C8FEC7";
    } else {
      ratesDescription[i].style.transition = "color 0.5s ease";
      ratesDescription[i].style.color = "#64C661";
    }
  }
});

document.getElementById("toggleButton").addEventListener("change", function () {
  let ratesDawn = document.querySelectorAll(".ratesDawn");
  for (let i = 0; i < ratesDawn.length; i++) {
    if (this.checked) {
      ratesDawn[i].setAttribute("stroke", "#C8FEC7");
    } else {
      ratesDawn[i].setAttribute("stroke", "#64C661");
    }
  }
});

document.getElementById("toggleButton").addEventListener("change", function () {
  let cardTitle = document.querySelectorAll(".card-title");
  for (let i = 0; i < cardTitle.length; i++) {
    if (this.checked) {
      cardTitle[i].style.color = "#fff";
    } else {
      cardTitle[i].style.transition = "color 0.5s ease";
      cardTitle[i].style.color = "#292929";
    }
  }
});

document.getElementById("toggleButton").addEventListener("change", function () {
  let portfolioCard = document.querySelectorAll(".portfolio-card");
  for (let i = 0; i < portfolioCard.length; i++) {
    if (this.checked) {
      portfolioCard[i].style.background = "#0B0B0B";
    } else {
      portfolioCard[i].style.background = "#fff";
    }
  }
});

document.getElementById("toggleButton").addEventListener("change", function () {
  let skillsTitle = document.querySelectorAll(".skills-title");
  for (let i = 0; i < skillsTitle.length; i++) {
    if (this.checked) {
      skillsTitle[i].style.color = "#fff";
    } else {
      skillsTitle[i].style.transition = "color 0.5s ease";
      skillsTitle[i].style.color = "#292929";
    }
  }
});

document.getElementById("toggleButton").addEventListener("change", function () {
  let skillsDescription = document.querySelectorAll(".skills-description");
  for (let i = 0; i < skillsDescription.length; i++) {
    if (this.checked) {
      skillsDescription[i].style.color = "#fff";
    } else {
      skillsDescription[i].style.transition = "color 0.5s ease";
      skillsDescription[i].style.color = "#292929";
    }
  }
});

document.getElementById("toggleButton").addEventListener("change", function () {
  let skillsCard = document.querySelectorAll(".skills-card");
  for (let i = 0; i < skillsCard.length; i++) {
    if (this.checked) {
      skillsCard[i].style.background = "#000000";
    } else {
      skillsCard[i].style.background = "#fff";
    }
  }
});

document.getElementById("toggleButton").addEventListener("change", function () {
  let percentSvg = document.querySelectorAll(".percent-svg");
  for (let i = 0; i < percentSvg.length; i++) {
    if (this.checked) {
      percentSvg[i].style.fill = "#fff";
    } else {
      percentSvg[i].style.fill = "#292929";
    }
  }
});

document.getElementById("toggleButton").addEventListener("change", function () {
  let percentCircle = document.querySelectorAll(".percent-circle");
  for (let i = 0; i < percentCircle.length; i++) {
    if (this.checked) {
      percentCircle[i].style.fill = "#000000";
    } else {
      percentCircle[i].style.fill = "#fff";
    }
  }
});

document.getElementById("toggleButton").addEventListener("change", function () {
  let bioDescription = document.querySelectorAll(".bio-description");
  for (let i = 0; i < bioDescription.length; i++) {
    if (this.checked) {
      bioDescription[i].style.color = "#fff";
    } else {
      bioDescription[i].style.transition = "color 0.5s ease";
      bioDescription[i].style.color = "#292929";
    }
  }
});


