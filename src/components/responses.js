export default function responses(input) {
  const text = input.toLowerCase();

  if (text.includes("resume")) {
    return {
      message: "Sure — scroll to the Resume section. It has everything you need.",
      action: () => window.scrollTo({ top: 4000, behavior: "smooth" })
    };
  }

  if (text.includes("github")) {
    return {
      message: "Opening my GitHub...",
      action: () => window.open("https://github.com/sreeprathaa06", "_blank")
    };
  }

  if (text.includes("email")) {
    return { message: "You can reach me at: sree3092006@gmail.com" };
  }

  if (text.includes("skills")) {
    return { message: "I work with React, JS, HTML, CSS and UI design." };
  }

  if (text.includes("projects")) {
    return { message: "I’ve worked on multiple real projects — check the Projects section." };
  }

  return { message: "Okay noted — tell me more." };
}
