<nav class="navbar">
  <div class="navbar-brand">
    <a href="/"> MOSA MAZROUI-SEBDANI </a>
  </div>
  <ul class="navbar-menu">
    <li><a href="about" class="navbar-item">about</a></li>
    <li><a href="works" class="navbar-item">works</a></li>
    <li><a href="contact" class="navbar-item">contact</a></li>
  </ul>
</nav>

<style lang="scss">
  .navbar {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: fit-content;
  }

  .navbar-brand {
    font-size: 1.5rem;
    font-weight: bold;
    border-bottom: 2px solid #14023e; // replace with variable
    margin-bottom: 0.6rem;
  }

  .navbar-menu {
    list-style: none;
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  .navbar-item {
    font-size: 1rem;
    text-decoration: none;
  }
</style>
