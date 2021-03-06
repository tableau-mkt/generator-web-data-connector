    // You may need to perform set up or other initialization tasks at various
    // points in the data connector flow. You can do so here.
    switch (phase) {
      case 'interactive':
        // Perform set up tasks that relate to when the user will be prompted to
        // enter information interactively.
        break;

      case 'gatherData':
        // Perform set up tasks that should happen when Tableau is attempting to
        // retrieve data from your connector (the user is not prompted for any
        // information in this phase.
        break;

      case 'auth':
        // Perform set up tasks that should happen when Tableau is attempting to
        // refresh OAuth authentication tokens.
        break;
    }

    // Always return a resolved promise when initialization tasks are complete.
    // This can be especially useful when initialization tasks are asynchronous
    // in nature.
    return Promise.resolve();
