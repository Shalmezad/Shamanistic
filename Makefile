run:
	firefox src/index.html
compress:
	@mkdir -p build
	@mkdir -p tmp/src
	#yui-compressor src/*.js build/*.js
	@find src/ -type f -name "*.js" -exec sh -c \
  "echo Compressing {}; \
	yui-compressor {} -o tmp/{};" ";"
	@cp tmp/src/* build/
	@cp src/index.html build/index.html
	@rm -rf tmp
	@echo "________________________________________"
	@echo "TOTAL AFTER MINIFY "
	@du -ah build
	@echo "________________________________________"
	@zip -r build build/
	@echo "________________________________________"
	@echo "TOTAL AFTER COMPRESSION"
	@ls -alh | grep ".zip" | awk "{print $$5}"
	@echo "________________________________________"

clean:
	rm -rf build/
	rm -rf tmp/
	rm build.zip
	
