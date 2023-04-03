document.querySelectorAll(".ax_elements .dropdownHead").forEach(headmenu => {
  const breakpoint = parseInt(headmenu.getAttribute('breakpoint'))
  if (!!breakpoint) less.modifyVars({
    '@dropdiwnBreakpointUp': breakpoint+'px',
    '@dropdiwnBreakpointDown': (breakpoint-1)+'px'
  })
})
