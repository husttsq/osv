/*
 * Copyright (C) 2013 Cloudius Systems, Ltd.
 *
 * This work is open source software, licensed under the terms of the
 * BSD license as described in the LICENSE file in the top-level directory.
 */

function ord(c)
{
    return c.charCodeAt(0);
}

function chr(o)
{
    return String.fromCharCode(o);
}

function jint(i) {
	return new java.lang.Integer(i)
}

function jlong(i) {
	return new java.lang.Long(i)
}

function vformat(fmt, args)
{
	var formatter = new java.util.Formatter()
	formatter.format(fmt, args)
	return String(formatter.toString())
}

function format(fmt, rest)
{
	var args = Array.slice(arguments)
	args.shift()
	return vformat(fmt, args)
}

function printf(fmt, rest)
{
	var args = Array.slice(arguments)
	args.shift()
	write_string(vformat(fmt, args))
}