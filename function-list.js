export function glslAxis(perspective) {
	if (perspective === "x") {
		return "st.x";
	} else if (perspective === "2x") {
		return "st.x+st.x";
	} else if (perspective === "pow(x,2)") {
		return "st.x*st.x";
	} else if (perspective === "x+y") {
		return "st.x+st.y";
	} else if (perspective === "x-y") {
		return "st.x-st.y";
	} else if (perspective === "x*y") {
		return "st.x*st.y";
	} else if (perspective === "x/y") {
		return "st.x/st.y";
	} else if (perspective === "y-x") {
		return "st.y-st.x";
	} else if (perspective === "y/x") {
		return "st.y/st.x";
	} else if (perspective === "2y") {
		return "st.y+st.y";
	} else if (perspective === "pow(y,2)") {
		return "st.y*st.y";
	} else {
	    return perspective;
	}
};
export function funcAry(init, r, term, step0, step1,func0,func1) {
	let ary = [];
	for (let i = init; i <= r; i += step0) {
		ary.push(func0(i));
	};
	for (let j = r; j <= term; j += step1) {
		ary.push(func1(j));
	};
	return ary;
};
export function easeInOut(k) {
	const linear = "linear";
	const sine = "sine";
	const easeInOut = "easeInOut";
	const easeInOutHalf = "easeInOutHalf";
	const easeInOutQuad = "easeInOutQuad";
	const easeInOutCubic = "easeInOutCubic";
	const easeInOutQuart = "easeInOutQuart";
	const easeInOutQuint = "easeInOutQuint";
	const easeInOutExpo = "easeInOutExpo";
	const easeInOutCirc = "easeInOutCirc";
	const easeInOutBack = "easeInOutBack";
	const easeInOutElastic = "easeInOutElastic";
	const easeInOutBounce = "easeInOutBounce";
	const array = [linear, sine, easeInOut, easeInOutHalf, easeInOutQuad, easeInOutCubic, easeInOutQuart, easeInOutQuint, easeInOutExpo, easeInOutCirc, easeInOutBack, easeInOutElastic, easeInOutBounce];
	return array[k];
};
export function list(s,t) {
	let sin = () => Math.sin(time*t);
	let cos = () => Math.cos(time*t);
	let tan = () => Math.tan(time*t);
	let asin = () => Math.asin(time*t);
	let acos = () => Math.acos(time*t);
	let atan = () => Math.atan(time*t);
	const ar = [sin(), cos(), tan(), asin(), acos(), atan()];
	return ar[s];
};