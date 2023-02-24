import Bull from "bull";
import logger from "../config/logger";
import redisConfig from "../config/redis";

import * as jobs from "../jobs";

// const queues = Object.values(jobs).map(job => ({
// 	bull: new Bull(job.key, { redis: redisConfig }),
// 	key: job.key,
// 	handle: job.handle,
// 	options: job.options,
// }));

export default class Queue {
	private queues: any[];

	constructor() {
		this.treatQueues();
	}

	private treatQueues() {
		this.queues = Object.values(jobs).map(job => ({
			bull: new Bull(job.key, { redis: redisConfig }),
			key: job.key,
			handle: job.handle,
			options: job.options,
		}));
	}

	add(name: string, data: any) {
		const queue = this.queues.find(queue => queue.key === name);

		return queue.bull.add(data, queue.options);
	}

	process() {
		return this.queues.forEach(queue => {
			queue.bull.process(queue.handle);

			queue.bull.on("failed", (job, err) => {
				logger.error({ job: job, message: err.message });
				if (process.env.NODE_ENV !== "production")
					console.log({ job: job, message: err.message });
			});
		});
	}
}
