
function goHome() {
    window.location.href = "index.html"
  }
  
  // Chatbot Functionen
  let chatOpen = false
  
  function openChatbot() {
    const chatbot = document.getElementById("chatbot-popup")
    if (chatbot) {
      chatbot.classList.remove("chatbot-hidden")
      chatOpen = true
    }
  }
  
  function closeChatbot() {
    const chatbot = document.getElementById("chatbot-popup")
    if (chatbot) {
      chatbot.classList.add("chatbot-hidden")
      chatOpen = false
    }
  }
  
  function sendMessage() {
    const input = document.getElementById("chat-input")
    const messagesDiv = document.getElementById("chat-messages")
  
    if (!input || !messagesDiv) return
  
    const message = input.value.trim()
    if (!message) return
  
    // User message
    addChatMessage(message, "user")
    input.value = ""
  
    // Bot Denkt
    const thinkingMsg = addChatMessage("Bot schreibt...", "bot", true)
  
    // Bot antwortet nach verzögerung
    setTimeout(() => {
      thinkingMsg.remove()
      const botResponse = getBotResponse(message)
      addChatMessage(botResponse, "bot")
    }, 1000)
  }
  
  function addChatMessage(text, sender, isTyping = false) {
    const messagesDiv = document.getElementById("chat-messages")
    const msgDiv = document.createElement("div")
  
    msgDiv.className = `chat-message ${sender}-message`
    if (isTyping) {
      msgDiv.className += " typing"
    }
  
    msgDiv.textContent = text
    messagesDiv.appendChild(msgDiv)
    messagesDiv.scrollTop = messagesDiv.scrollHeight
  
    return msgDiv
  }
  
  function getBotResponse(message) {
    const lowerMsg = message.toLowerCase()
  
    // einfache Antwort
    if (lowerMsg.includes("hallo") || lowerMsg.includes("hi") || lowerMsg.includes("hey") || lowerMsg.includes("moin")) {
      return "Hallo! Wie kann ich dir helfen?";
    }
  
    // KI
    if (lowerMsg.includes("ki") || lowerMsg.includes("künstliche intelligenz") || lowerMsg.includes("ai")) {
      return "KI ist super spannend! Schau dir unsere Infoseiten an, dort erfährst du mehr darüber.";
    }
  
    // Geschichte der KI
    if (lowerMsg.includes("geschichte") || lowerMsg.includes("historie")) {
      return "Die Geschichte der KI ist faszinierend! Sie beginnt schon in den 1950er Jahren.";
    }
  
    // Sprache / NLP
    if (lowerMsg.includes("sprache") || lowerMsg.includes("nlp") || lowerMsg.includes("textanalyse")) {
      return "KI versteht Sprache durch Natural Language Processing (NLP). Dabei werden Texte in Zahlen umgewandelt!";
    }
  
    // Mathematik
    if (lowerMsg.includes("mathe") || lowerMsg.includes("mathematik") || lowerMsg.includes("formeln")) {
      return "Ohne Mathematik keine KI! Neuronale Netze basieren komplett auf mathematischen Berechnungen.";
    }
  
    // Befinden
    if (lowerMsg.includes("wie geht") || lowerMsg.includes("wie gehts")) {
      return "Mir geht es gut! Ich bin nur ein einfacher Chatbot, aber ich helfe gerne";
    }
  
    // Dank
    if (lowerMsg.includes("danke") || lowerMsg.includes("dankeschön")) {
      return "Gerne! Wenn du noch Fragen hast, frag einfach!";
    }
  
    // Verabschiedung
    if (lowerMsg.includes("tschüss") || lowerMsg.includes("bye") || lowerMsg.includes("ciao") || lowerMsg.includes("auf wiedersehen")) {
      return "Tschüss! Bis bald!";
    }
  
    // Hilfe / Info
    if (lowerMsg.includes("hilfe") || lowerMsg.includes("help") || lowerMsg.includes("frage")) {
      return "Ich kann dir Fragen zu KI, Geschichte, Sprache, Mathematik und Informatik beantworten. Was möchtest du wissen?";
    }
  
    // Programmieren / Informatik
    if (lowerMsg.includes("programmieren") || lowerMsg.includes("javascript") || lowerMsg.includes("code")) {
      return "Programmieren macht Spaß! JS, Python und C++ sind beliebte Sprachen für KI- und Web-Projekte.";
    }
  
    // Wissenschaft allgemein
    if (lowerMsg.includes("wissenschaft") || lowerMsg.includes("forschung")) {
      return "Wissenschaft ist spannend! KI spielt in vielen Forschungsbereichen eine große Rolle.";
    }
  
    // Spaß / Unterhaltung
    if (lowerMsg.includes("witz") || lowerMsg.includes("witzig") || lowerMsg.includes("fun")) {
      return "Warum können Geister so schlecht lügen? Weil man durch sie hindurchsieht!";
    }
  
    // Essen / Alltag
    if (lowerMsg.includes("essen") || lowerMsg.includes("mittag") || lowerMsg.includes("pizza")) {
      return "Hmm, lecker! Ich selbst esse zwar nichts, aber ich kann dir Rezeptideen geben";
    }
  
    // Default Antwort
    const defaultResponses = [
      "Hmm, dazu kann ich dir leider nicht viel sagen. Frag mich etwas über KI!",
      "Gute Frage! Schau dir unsere Infoseiten an, dort findest du viele Antworten.",
      "Oh, das habe ich noch nicht gelernt. Kannst du mir mehr darüber erzählen?",
    ]
  
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
  }
  
  // Enter Taste für chat
  document.addEventListener("DOMContentLoaded", () => {
    const chatInput = document.getElementById("chat-input")
    if (chatInput) {
      chatInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          sendMessage()
        }
      })
    }
  })
  
  function updateProgressBar() {
    const progressBar = document.getElementById("progress-bar")
    if (!progressBar) return
  
    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  
    const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100
    progressBar.style.width = scrollPercent + "%"
  }
  
  if (document.getElementById("progress-bar")) {
    window.addEventListener("scroll", updateProgressBar)
    window.addEventListener("resize", updateProgressBar)
  }
  