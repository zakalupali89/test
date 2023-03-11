export async function signUp(form) {
	const urls = ['/server-ok.json', '/server-error.json'];
	const currentUrl = urls[~~(Math.random() * 2)];
	const formData = new FormData(form);
	const searchParams = new URLSearchParams();
	Object.entries([...formData.entries()]).forEach(([key, value]) => {
		value && searchParams.append(key, value);
	})
	const response = await fetch(`${currentUrl}?${searchParams}`)
	return response.json();
}
