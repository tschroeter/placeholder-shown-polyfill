(function (dom) {

  function update_placeholder (el)
  {
    el.classList[el.value ? 'remove' : 'add']('placeholder-shown');
  }

  function install ()
  {
    dom.body.parentElement.classList.add('polyfill', 'placeolder-shown');
    dom.querySelectorAll('[placeholder]').forEach(function (el) {
      if (el.getAttribute('placeholder') != "") update_placeholder(el);
      dom.addEventListener('change', function () {update_placeholder(el)});
      dom.addEventListener('keyup', function () {update_placeholder(el)});
    });

    return true;
  }

  function is_placeholder_shown_available ()
  {
    try
    {
      dom.querySelector(':placeholder-shown');
    } catch (error)
    {
      if (error instanceof DOMException) return false;
      throw new Error(error);
    }

    return true;
  }

  if (!is_placeholder_shown_available())
    /^[c|i]|d$/.test(dom.readyState || "") && install() || dom.addEventListener("DOMContentLoaded", install);
})(document);
