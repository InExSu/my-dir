import { createMachine } from "xstate";

export const ToDoMachine = createMachine({
    /** @xstate-layout N4IgpgJg5mDOIC5QBUD2ARVACAsgQwGMALASwDswA6AGVTwnKizU1gGJb7GsAXVCVLCwAzPCQA2AbQAMAXUSgADoJI8SqMgpAAPRAFoA7AFYAHJSMAmaRYsmjANjsBGJyYA0IAJ76nRgMyUTgAsQSYmTtLWAJzSJn5+AL4JHizY+MTkVJwMZEyp7GgCQuJ0EJAy8kggyrCq6ppVugh69r7mUUH2jkYG0lH+Fh7ezRZOAcGh4ZEWMXGJSR5k-HBaqbiEpBRaNXUaWk16JjOUIT1hDvbSvUFD+n7WgU5RBsFGRi73Rgsga+mbWaVuPltio1HtGvoDOETkEznYuldpDcvPpRkZKPY-DYohYjNInn4nAYDN9fhtMpRCoIsNlICDamCGqADm8LJQ-A4gsEDB0cU9bs0TAZKDj7MT7i9bDF7KSMGlyRQaIDcrx+NSAKIAJ01qE1dKqO0Z+0hb0oFnsUT8lpxsSiJmRwz0fjMsyCWMijg5HSSSSAA */
    id: "ToDoMachine"
    /** @xstate-layout N4IgpgJg5mDOIC5gF8A0IB2B7CdGgAoBbAQwGMALASwzAEp8QAHLWKgFyqw0YA9EAjACZ0AT0FDkU5EA */,

    states: {
        "Loading ToDos": {
            on: {
                "Loading todos fail": "Loading todos Errored",
                "Todos loaded": "Todos Loaded"
            }
        },

        "Todos Loaded": {},
        "Loading todos Errored": {}
    },

    initial: "Loading ToDos"
});