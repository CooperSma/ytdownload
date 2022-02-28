<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	// import axios from "axios"

	let yturl = 'https://youtube.com';
	let error = ' '

	function urlSubmitted() {
		error = "submitted!"
		fetch("https://ipinfo.io/json")
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    console.log(myJson.ip);
  })
  .catch(function (error) {
    console.log("Error: " + error);
  });


	}
	$: {


		// if isUrl(url){

		// }
		yturl = yturl.replace(" ", "")
		// if (isurl("https://coopgroup.org") == false){
		// 	error = "invalid url"
		// }


		// try{
		// const res = axios.get(url);
		// console.log(res)}
		// catch{
		// 	console.log('uh')
		// }


	}
</script>


<main class="bg-black h-screen w-screen flex justify-items-center flex-col justify-center text-center ">

	<div id="center"
		class="bg-blackw-2/5 content-center self-center h-2/4 rounded-lg pl-5 pt-5 text-white terminalfont font-extrabold text-4xl">
		<h1 class="text-4xl">Youtube Downloader</h1>

		<br><br>
		<form on:submit|preventDefault={urlSubmitted}>
			<div class="flex items-stretch">

				<input type="text" id="fname" name="fname" bind:value={yturl}
					class="bg-blue outline-none w-96 h-10 text-black text-sm rounded-lg mx-1 px-5"><br><br>

				<select name="format" id="format" class="text-lg text-black rounded-lg mx-1 px-5">
					<option value="audio">Audio</option>
					<option value="volvo">mp4</option>
					<option value="saab">mp3</option>
				</select>

			</div>
		</form>
		<br>
		<h3 id="error" class="text-red text-sm">{error}</h3>

	</div>

</main>


<svelte:head>
	<title>Youtube Downloader</title>
</svelte:head>