import React from 'react';
import { render, screen } from "@testing-library/react";
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../app/store';
import LoaderBackdrop from '../features/Loader/Loader';
import App from '../App';

describe("Testing entery point of the app ", () => {
    test("Verify the root element in document", () => {
        render(
            <React.StrictMode>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <MemoryRouter>
                            <App />
                            <LoaderBackdrop />
                        </MemoryRouter>
                    </PersistGate>
                </Provider>
            </React.StrictMode>
        )
    })
})