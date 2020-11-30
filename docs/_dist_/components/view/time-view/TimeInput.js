import './TimeInput.css.proxy.js';
/* src/components/view/time-view/TimeInput.svelte generated by Svelte v3.30.0 */
import {
	SvelteComponent,
	action_destroyer,
	append,
	attr,
	component_subscribe,
	create_component,
	destroy_component,
	detach,
	element,
	init,
	insert,
	mount_component,
	safe_not_equal,
	space,
	toggle_class,
	transition_in,
	transition_out
} from "../../../../web_modules/svelte/internal.js";

import { contextKey } from "../../lib/context.js";
import { onMount, getContext } from "../../../../web_modules/svelte.js";
import Chevron from "./Chevron.js";
import { timeInput } from "./time-input.js";
import { createStore } from "./time-store.js";
import dayjs from "../../../../web_modules/dayjs/esm.js";

function create_fragment(ctx) {
	let div2;
	let div0;
	let chevron0;
	let t0;
	let chevron1;
	let t1;
	let input;
	let timeInput_action;
	let t2;
	let div1;
	let chevron2;
	let t3;
	let chevron3;
	let current;
	let mounted;
	let dispose;
	chevron0 = new Chevron({ props: { up: true } });
	chevron0.$on("click", /*click_handler*/ ctx[7]);
	chevron1 = new Chevron({ props: { up: true } });
	chevron1.$on("click", /*click_handler_1*/ ctx[8]);
	chevron2 = new Chevron({ props: { up: false } });
	chevron2.$on("click", /*click_handler_2*/ ctx[9]);
	chevron3 = new Chevron({ props: { up: false } });
	chevron3.$on("click", /*click_handler_3*/ ctx[10]);

	return {
		c() {
			div2 = element("div");
			div0 = element("div");
			create_component(chevron0.$$.fragment);
			t0 = space();
			create_component(chevron1.$$.fragment);
			t1 = space();
			input = element("input");
			t2 = space();
			div1 = element("div");
			create_component(chevron2.$$.fragment);
			t3 = space();
			create_component(chevron3.$$.fragment);
			attr(div0, "class", "controls svelte-1a3xaoi");
			attr(input, "type", "text");
			attr(input, "class", "svelte-1a3xaoi");
			attr(div1, "class", "controls svelte-1a3xaoi");
			attr(div2, "class", "time-picker svelte-1a3xaoi");
			toggle_class(div2, "is-night", !/*$isDaytime*/ ctx[0]);
		},
		m(target, anchor) {
			insert(target, div2, anchor);
			append(div2, div0);
			mount_component(chevron0, div0, null);
			append(div0, t0);
			mount_component(chevron1, div0, null);
			append(div2, t1);
			append(div2, input);
			append(div2, t2);
			append(div2, div1);
			mount_component(chevron2, div1, null);
			append(div1, t3);
			mount_component(chevron3, div1, null);
			current = true;

			if (!mounted) {
				dispose = action_destroyer(timeInput_action = timeInput.call(null, input, /*timeStore*/ ctx[5]));
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*$isDaytime*/ 1) {
				toggle_class(div2, "is-night", !/*$isDaytime*/ ctx[0]);
			}
		},
		i(local) {
			if (current) return;
			transition_in(chevron0.$$.fragment, local);
			transition_in(chevron1.$$.fragment, local);
			transition_in(chevron2.$$.fragment, local);
			transition_in(chevron3.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(chevron0.$$.fragment, local);
			transition_out(chevron1.$$.fragment, local);
			transition_out(chevron2.$$.fragment, local);
			transition_out(chevron3.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div2);
			destroy_component(chevron0);
			destroy_component(chevron1);
			destroy_component(chevron2);
			destroy_component(chevron3);
			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let $date;
	let $isDaytime;
	let { viewContextKey } = $$props;
	const { config } = getContext(contextKey);
	const { date, isDaytime } = getContext(viewContextKey);
	component_subscribe($$self, date, value => $$invalidate(11, $date = value));
	component_subscribe($$self, isDaytime, value => $$invalidate(0, $isDaytime = value));
	const { increment, decrement, time: timeStore } = createStore($date, config.morning, config.night);

	onMount(() => timeStore.subscribe(ts => {
		const [d, m] = ts.split(":").map(g => parseInt(g));
		date.update(v => dayjs(v).hour(d).minute(m).toDate());
	}));

	const click_handler = () => increment("hour");
	const click_handler_1 = () => increment("minute");
	const click_handler_2 = () => decrement("hour");
	const click_handler_3 = () => decrement("minute");

	$$self.$$set = $$props => {
		if ("viewContextKey" in $$props) $$invalidate(6, viewContextKey = $$props.viewContextKey);
	};

	return [
		$isDaytime,
		date,
		isDaytime,
		increment,
		decrement,
		timeStore,
		viewContextKey,
		click_handler,
		click_handler_1,
		click_handler_2,
		click_handler_3
	];
}

class TimeInput extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { viewContextKey: 6 });
	}
}

export default TimeInput;