export class LevelEntity {
	constructor(
		public id: string,
		public name: string,
		public description: string,
		public level: number,
		public created_at: Date,
		public updated_at: Date,
	) {}
}
