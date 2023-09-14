import type { NextApiRequest, NextApiResponse } from "next";
import db from "@/db/data.json";
import auth from "json-server-auth";

interface Data {
	id: string;
	organization: string;
	username: string;
	email: string;
	phone_number: string;
	date_joined: string;
	status: string;
}

const handler = (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === "GET") {
		try {
			// Implement pagination logic if needed
			const page = parseInt((req.query.page as string) || "1", 10);
			const perPage = parseInt((req.query.perPage as string) || "10", 10);
			const start = (page - 1) * perPage;
			const end = start + perPage;
			const dataSlice = db.slice(start, end);

			const pageData = {
				total: db.length,
				page,
				data: dataSlice,
			};

			res.json(pageData);
		} catch (error) {
			console.error("Error in GET request:", error);
			res.status(500).json({ error: "Internal server error" });
		}
	} else if (req.method === "POST") {
		try {
			// Create a new item
			const newItem: Data = req.body;
			// Validate and sanitize newItem if needed
			db.push(newItem);
			res.json(newItem);
		} catch (error) {
			console.error("Error in POST request:", error);
			res.status(500).json({ error: "Internal server error" });
		}
	} else if (req.method === "PUT") {
		try {
			// Update an item by ID
			const { id } = req.query;
			const updatedItem: Data = req.body;
			const index = db.findIndex((item) => item.id === id);

			if (index !== -1) {
				db[index] = updatedItem;
				res.json(updatedItem);
			} else {
				res.status(404).json({ error: "Item not found" });
			}
		} catch (error) {
			console.error("Error in PUT request:", error);
			res.status(500).json({ error: "Internal server error" });
		}
	} else if (req.method === "DELETE") {
		try {
			// Delete an item by ID
			const { id } = req.query;
			const index = db.findIndex((item) => item.id === id);

			if (index !== -1) {
				db.splice(index, 1);
				res.json({ message: "Item deleted" });
			} else {
				res.status(404).json({ error: "Item not found" });
			}
		} catch (error) {
			console.error("Error in DELETE request:", error);
			res.status(500).json({ error: "Internal server error" });
		}
	}
};

export default handler;
