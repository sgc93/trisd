import CustomBtn from "./CustomBtn";

export default function FilePicker({ file, setFile, readFile }) {
	return (
		<div className="filepicker-container">
			<div className="flex-1 flex flex-col">
				<input
					id="file-upload"
					type="file"
					accept="image/*"
					onChange={(e) => setFile(e.target.files[0])}
				/>
				<label htmlFor="file-upload" className="filepicker-label">
					Upload File
				</label>
				<p className="mt-2 text-gray-200 text-xs truncate">
					{file === "" ? "No File Selected" : file.name}
				</p>
				<div className="mt-4 flex flex-wrap gap-3">
					<CustomBtn
						type={"outline"}
						title={"Logo"}
						handleClick={() => readFile("logo")}
						customStyles={"text-xs"}
					/>
					<CustomBtn
						type={"filled"}
						title={"Full"}
						handleClick={() => readFile("full")}
						customStyles={"text-xs"}
					/>
				</div>
			</div>
		</div>
	);
}
