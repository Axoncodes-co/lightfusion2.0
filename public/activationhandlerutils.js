var activationHandlerLoaded = false
var natId = 'axg_naturalizer';
var triggeredId = '';

function activationHandlerinit() {
  // Implement the naturalizer layer
  if (!activationHandlerLoaded) {
    activationHandlerLoaded = true
    const naturalizer = document.createElement("DIV");
    naturalizer.setAttribute('id', natId)
    document.body.appendChild(naturalizer);
  }
}

function activationHandlerstart(triggeredIdArg) {
  triggeredId = triggeredIdArg
  const natEl = document.getElementById(natId);
  const triggeredElem = document.getElementById(triggeredId);
  activationHandlerToolsopen(natEl)
  activationHandlerToolsstartListener(natEl)
  activationHandlerToolsactiveElem(triggeredElem)
}
function activationHandlerend(triggeredIdArg) {
  if (triggeredIdArg && typeof triggeredIdArg == 'string') triggeredId = triggeredIdArg
  const natEl = document.getElementById(natId);
  const triggeredElem = document.getElementById(triggeredId);
  activationHandlerToolsclose(natEl)
  activationHandlerToolsendListener(natEl)
  activationHandlerToolsdeactiveElem(triggeredElem)
  triggeredId = '';
}

// class activationHandler {
//   static init() {
//     // Implement the naturalizer layer
//     if (!activationHandlerLoaded) {
//       activationHandlerLoaded = true
//       const naturalizer = document.createElement("DIV");
//       naturalizer.setAttribute('id', natId)
//       document.body.appendChild(naturalizer);
//     }
//   }

//   static start(triggeredIdArg) {
//     triggeredId = triggeredIdArg
//     const natEl = document.getElementById(natId);
//     const triggeredElem = document.getElementById(triggeredId);
//     activationHandlerTools.open(natEl)
//     activationHandlerTools.startListener(natEl)
//     activationHandlerTools.activeElem(triggeredElem)
//   }

//   static end(triggeredIdArg) {
//     if (triggeredIdArg && typeof triggeredIdArg == 'string') triggeredId = triggeredIdArg
//     const natEl = document.getElementById(natId);
//     const triggeredElem = document.getElementById(triggeredId);
//     activationHandlerTools.close(natEl)
//     activationHandlerTools.endListener(natEl)
//     activationHandlerTools.deactiveElem(triggeredElem)
//     triggeredId = '';
//   }
// }


function activationHandlerToolsopen(natEl) {
  natEl.style.zIndex = '100';
}
function activationHandlerToolsclose(natEl) {
  natEl.style.zIndex = '-1';
}
function activationHandlerToolsstartListener(natEl) {
  natEl.addEventListener('click', activationHandlerend)
}
function activationHandlerToolsendListener(natEl) {
  natEl.removeEventListener('click', activationHandlerend)
}
function activationHandlerToolsactiveElem(triggeredElem) {
  triggeredElem.classList.add('axg_naturalizer_active');
}
function activationHandlerToolsdeactiveElem(triggeredElem) {
  triggeredElem.classList.remove('axg_naturalizer_active');
}

// class activationHandlerTools {
//   static open(natEl) {
//     natEl.style.zIndex = '100';
//   }

//   static close(natEl) {
//     natEl.style.zIndex = '-1';
//   }

//   static startListener(natEl) {
//     natEl.addEventListener('click', activationHandler.end)
//   }
  
//   static endListener(natEl) {
//     natEl.removeEventListener('click', activationHandler.end)
//   }

//   static activeElem(triggeredElem) {
//     triggeredElem.classList.add('axg_naturalizer_active');
//   }
  
//   static deactiveElem(triggeredElem) {
//     triggeredElem.classList.remove('axg_naturalizer_active');
//   }
// }