import * as betterSqlite from 'better-sqlite3';
import * as drizzleDB from 'drizzle-orm/better-sqlite3';
import { InferModel, sqliteTable, integer, real } from 'drizzle-orm/sqlite-core';

export interface UdiSiiPersistence {
	readonly db: drizzleDB.BetterSQLite3Database; // this what we query
    readonly sqlite: betterSqlite.Database;       // provided in case it's necessary
	readonly srcFsPath: string;                   // provided in case it's necessary
}

/**
 * Construct a function that, when called, will setup the UDI-SII persistence
 * database idempotently. If it's called multiple times it will return the singleton
 * instance. This is useful so that the first call can do the setup and all subsequent
 * calls will return the initial instance.
 * @param srcFsPath where to access the SQLite file
 * @param options ORM and other configuration options
 * @returns a function that can be called idempotently to create or open the database
 */
export const udiSiiPersistenceSupplier = (srcFsPath = "udi-sii/udi-sii-prime.sqlite.db"): () => UdiSiiPersistence => {
	let singleton: UdiSiiPersistence | undefined = undefined;
	return () => {
		if (!singleton) {
			const sqlite = new betterSqlite.default(srcFsPath, { readonly: true });
			const db = drizzleDB.drizzle(sqlite);
			singleton = { sqlite, db, srcFsPath };
		}
		return singleton;
	}
}

export const udiSiiPersistence = udiSiiPersistenceSupplier();

// -------------------------------------------------------------------------
// Prepare the entities (tables, etc.) and export tables so that Drizzle ORM
// can be used to conveniently generate typed SQL. The structure is defined
// by databases generated by $PROJECT_HOME/udi-sii/udictl.ts so Drizzle is
// only used for querying not for DDL/migrations.
// -------------------------------------------------------------------------

export const payPalMonthlySales = sqliteTable("financial_paypal_activity_sales_monthly", {
	month: integer('month', { mode: 'timestamp' }),
	salesCount: integer('sales_count'),
	netSalesAmount: real('net_sales_amount'),
	avgSalesAmount: real('avg_sales_amount')
});

export type PayPalMonthlySales = InferModel<typeof payPalMonthlySales>;
