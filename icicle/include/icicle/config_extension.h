#pragma once

#include <string>
#include <unordered_map>
#include <variant>
#include <stdexcept>

#include "icicle/errors.h"

namespace icicle {

  class ConfigExtension
  {
  public:
    using ConfigValue = std::variant<int, bool>; // int can represent enums
    using ConfigMap = std::unordered_map<std::string, ConfigValue>;

    ConfigExtension() = default;

    // Copy constructor
    ConfigExtension(const ConfigExtension& other) : extensions_{other.extensions_} {}

    template <typename T>
    void set(const std::string& key, T value)
    {
      extensions_[key] = value;
    }

    template <typename T>
    T get(const std::string& key) const
    {
      auto it = extensions_.find(key);
      if (it == extensions_.end()) {
        THROW_ICICLE_ERR(eIcicleError::INVALID_ARGUMENT, "Key not found or type mismatch");
      }
      return std::get<T>(it->second);
    }

    bool has(const std::string& key) const { return extensions_.find(key) != extensions_.end(); }

    // Clone method
    ConfigExtension* clone() const { return new ConfigExtension(*this); }

  private:
    ConfigMap extensions_;
  };
}; // namespace icicle