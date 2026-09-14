type AppEntry = {
  prefix: string;
  entryPoint: string;
};

export default class AppDispatcher {
  private readonly apps = [
    { prefix: "/apps/angular14/", entryPoint: "/apps/angular14/index.html" },
    { prefix: "/apps/ts/", entryPoint: "/apps/ts/index.html" },
  ];

  constructor(
    private readonly doc: Document,
    private readonly pathname: string,
  ) {}

  public run() {
    const app = this.apps.find((a) => this.pathname.startsWith(a.prefix));

    if (app) {
      this.dispatch(app);
    }
  }

  private dispatch(app: AppEntry) {
    fetch(app.entryPoint)
      .then((r) => (r.status === 200 ? r : Promise.reject()))
      .then((r) => r.text())
      .then((html) => {
        this.doc.open();
        this.doc.write(html);
        this.doc.close();
      })
      .catch((error) => console.error(error));
  }
}

const appDispatcher = new AppDispatcher(document, location.pathname);
appDispatcher.run();
