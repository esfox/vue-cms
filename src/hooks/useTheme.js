export function useTheme()
{
  const get = () => localStorage.getItem('theme') || 'light';
  const set = theme => document.documentElement.setAttribute('theme', theme);

  const toggle = () =>
  {
    let theme = get();
    theme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    set(theme);
  };

  set(get());

  return { toggle };
}
